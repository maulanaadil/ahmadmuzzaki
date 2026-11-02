import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found frame">
      <p className="caption-3">Error 404</p>
      <h1 className="heading-2">This page does not exist.</h1>
      <p className="body-3">The link may be broken, or the page may have moved. The portfolio is one page, so everything is a short scroll from the top.</p>
      <Link className="button button-md button-light" href="/">Back to the portfolio</Link>
    </main>
  );
}
