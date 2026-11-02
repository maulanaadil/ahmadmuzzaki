import { ImageResponse } from "next/og";

export const alt = "Ahmad Muzzaki Mahmud — Finance and Operations Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 62, background: "linear-gradient(180deg, #02070a 0%, #02070a 45%, #0297de 130%)", color: "#fcffff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 23, letterSpacing: 1 }}>
        <span>AHMAD MUZZAKI MAHMUD</span><span>FINANCE &amp; OPERATIONS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontFamily: "sans-serif", fontSize: 104, lineHeight: 1.02, letterSpacing: -5 }}>
        <span>The numbers</span><span>tell a story.</span><span style={{ color: "#fcffff", opacity: 0.8 }}>I change what happens next.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(252,255,255,0.4)", paddingTop: 24, fontSize: 22 }}>
        <span>Cost control · Cash flow · Production</span><span>Bandung, Indonesia</span>
      </div>
    </div>,
    size,
  );
}
