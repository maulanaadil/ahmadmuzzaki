#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Slide Search CLI - Search slide design databases for strategies, layouts, copy, and charts
"""

import json
import argparse
from slide_search_core import (
    search, search_all, AVAILABLE_DOMAINS,
    search_with_context, get_layout_for_goal, get_typography_for_slide,
    get_color_for_emotion, get_background_config
)


RESULT_FIELDS = {
    "strategy": ("strategy_name", [
        ("Slides", "slide_count"), ("Structure", "structure"), ("Goal", "goal"),
        ("Audience", "audience"), ("Tone", "tone"), ("Arc", "narrative_arc"),
        ("Source", "sources")]),
    "layout": ("layout_name", [
        ("Use case", "use_case"), ("Zones", "content_zones"),
        ("Visual weight", "visual_weight"), ("CTA", "cta_placement"),
        ("Recommended", "recommended_for"), ("Avoid", "avoid_for"),
        ("CSS", "css_structure")]),
    "copy": ("formula_name", [
        ("Components", "components"), ("Use case", "use_case"),
        ("Template", "example_template"), ("Emotion", "emotion_trigger"),
        ("Slide type", "slide_type"), ("Source", "source")]),
    "chart": ("chart_type", [
        ("Best for", "best_for"), ("Data type", "data_type"),
        ("When to use", "when_to_use"), ("When to avoid", "when_to_avoid"),
        ("Max categories", "max_categories"), ("Slide context", "slide_context"),
        ("CSS", "css_implementation"), ("Accessibility", "accessibility_notes")]),
}


def format_result(result, domain):
    """Format a single search result for display"""
    if domain not in RESULT_FIELDS:
        return ""
    title_key, fields = RESULT_FIELDS[domain]
    output = [f"**{result.get(title_key, 'N/A')}**"]
    output.extend(f"  {label}: {result.get(key, 'N/A')}" for label, key in fields)
    return "\n".join(output)


def format_context(context):
    """Format contextual recommendations for display."""
    output = []
    output.append(f"\n=== CONTEXTUAL RECOMMENDATIONS ===")
    output.append(f"Inferred Goal: {context.get('inferred_goal', 'N/A')}")
    output.append(f"Position: Slide {context.get('slide_position')} of {context.get('total_slides')}")

    if context.get('recommended_layout'):
        output.append(f"\n📐 Layout: {context['recommended_layout']}")
        output.append(f"   Direction: {context.get('layout_direction', 'N/A')}")
        output.append(f"   Visual Weight: {context.get('visual_weight', 'N/A')}")

    if context.get('typography'):
        typo = context['typography']
        output.append(f"\n📝 Typography:")
        output.append(f"   Primary: {typo.get('primary_size', 'N/A')}")
        output.append(f"   Secondary: {typo.get('secondary_size', 'N/A')}")
        output.append(f"   Contrast: {typo.get('weight_contrast', 'N/A')}")

    if context.get('color_treatment'):
        color = context['color_treatment']
        output.append(f"\n🎨 Color Treatment:")
        output.append(f"   Background: {color.get('background', 'N/A')}")
        output.append(f"   Text: {color.get('text_color', 'N/A')}")
        output.append(f"   Accent: {color.get('accent_usage', 'N/A')}")

    if context.get('should_break_pattern'):
        output.append(f"\n⚡ Pattern Break: YES (use contrasting layout)")

    if context.get('should_use_full_bleed'):
        output.append(f"\n🖼️ Full Bleed: Recommended for emotional impact")

    if context.get('use_background_image') and context.get('background'):
        bg = context['background']
        output.append(f"\n📸 Background Image:")
        output.append(f"   Category: {bg.get('image_category', 'N/A')}")
        output.append(f"   Overlay: {bg.get('overlay_style', 'N/A')}")
        output.append(f"   Keywords: {bg.get('search_keywords', 'N/A')}")

    output.append(f"\n✨ Animation: {context.get('animation_class', 'animate-fade-up')}")

    return "\n".join(output)


def main():
    parser = argparse.ArgumentParser(
        description="Search slide design databases",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  search-slides.py "investor pitch"           # Auto-detect domain (strategy)
  search-slides.py "funnel conversion" -d chart
  search-slides.py "headline hook" -d copy
  search-slides.py "two column" -d layout
  search-slides.py "startup funding" --all    # Search all domains
  search-slides.py "metrics dashboard" --json # JSON output

Contextual Search (Premium System):
  search-slides.py "problem slide" --context --position 2 --total 9
  search-slides.py "cta" --context --position 9 --total 9 --prev-emotion frustration
        """
    )

    parser.add_argument("query", help="Search query")
    parser.add_argument("-d", "--domain", choices=AVAILABLE_DOMAINS,
                        help="Specific domain to search (auto-detected if not specified)")
    parser.add_argument("-n", "--max-results", type=int, default=3,
                        help="Maximum results to return (default: 3)")
    parser.add_argument("--all", action="store_true",
                        help="Search across all domains")
    parser.add_argument("--json", action="store_true",
                        help="Output as JSON")

    # Contextual search options
    parser.add_argument("--context", action="store_true",
                        help="Use contextual search with layout/typography/color recommendations")
    parser.add_argument("--position", type=int, default=1,
                        help="Slide position in deck (1-based, default: 1)")
    parser.add_argument("--total", type=int, default=9,
                        help="Total slides in deck (default: 9)")
    parser.add_argument("--prev-emotion", type=str, default=None,
                        help="Previous slide's emotion for contrast calculation")

    args = parser.parse_args()

    # Contextual search mode
    if args.context:
        result = search_with_context(
            args.query,
            slide_position=args.position,
            total_slides=args.total,
            previous_emotion=args.prev_emotion
        )

        if args.json:
            print(json.dumps(result, indent=2))
        else:
            print(format_context(result['context']))

            # Also show base search results
            if result.get('base_results'):
                print("\n\n=== RELATED SEARCH RESULTS ===")
                for domain, data in result['base_results'].items():
                    print(f"\n--- {domain.upper()} ---")
                    for item in data['results']:
                        print(format_result(item, domain))
                        print()
        return

    if args.all:
        results = search_all(args.query, args.max_results)

        if args.json:
            print(json.dumps(results, indent=2))
        else:
            if not results:
                print(f"No results found for: {args.query}")
                return

            for domain, data in results.items():
                print(f"\n=== {domain.upper()} ===")
                print(f"File: {data['file']}")
                print(f"Results: {data['count']}")
                print()
                for result in data['results']:
                    print(format_result(result, domain))
                    print()
    else:
        result = search(args.query, args.domain, args.max_results)

        if args.json:
            print(json.dumps(result, indent=2))
        else:
            if result.get("error"):
                print(f"Error: {result['error']}")
                return

            print(f"Domain: {result['domain']}")
            print(f"Query: {result['query']}")
            print(f"File: {result['file']}")
            print(f"Results: {result['count']}")
            print()

            if result['count'] == 0:
                print("No matching results found.")
                return

            for i, item in enumerate(result['results'], 1):
                print(f"--- Result {i} ---")
                print(format_result(item, result['domain']))
                print()


if __name__ == "__main__":
    main()
