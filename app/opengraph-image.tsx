import { ImageResponse } from "next/og";

export const alt = "Ahmad Muzzaki Mahmud — Finance and Operations Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 62, background: "#f5f2eb", color: "#25231f" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 23, letterSpacing: 1 }}>
        <span>AHMAD MUZZAKI MAHMUD</span><span>FINANCE &amp; OPERATIONS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontFamily: "serif", fontSize: 101, lineHeight: 1.02, letterSpacing: -5 }}>
        <span>The numbers</span><span>tell a story.</span><span style={{ color: "#777b60" }}>I change what happens next.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #bcb8ad", paddingTop: 24, fontSize: 22 }}>
        <span>Cost control · Cash flow · Production</span><span>Bandung, Indonesia</span>
      </div>
    </div>,
    size,
  );
}
