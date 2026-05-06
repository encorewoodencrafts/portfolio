import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "encore woodcrafts — wooden doors, glass doors & railings · india";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #FAF7F2 0%, #F4EFE6 50%, #E8E2D7 100%)",
          color: "#1A1612",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#6B4423",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <svg width="42" height="42" viewBox="0 0 40 40">
              <rect
                x="3.5"
                y="3.5"
                width="33"
                height="33"
                rx="1.5"
                fill="none"
                stroke="#1A1612"
                strokeWidth="1.6"
              />
              <line x1="3.5" y1="13.2" x2="36.5" y2="13.2" stroke="#1A1612" strokeWidth="1.6" />
              <line x1="3.5" y1="20" x2="26" y2="20" stroke="#1A1612" strokeWidth="1.6" />
              <line x1="3.5" y1="26.8" x2="36.5" y2="26.8" stroke="#1A1612" strokeWidth="1.6" />
              <line x1="11.5" y1="3.5" x2="11.5" y2="36.5" stroke="#1A1612" strokeWidth="1.6" strokeOpacity="0.55" />
              <circle cx="32" cy="20" r="1.4" fill="#6B4423" />
            </svg>
            <span>encore woodcrafts · india</span>
          </div>
          <span>est. 2014 · hyderabad</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#6B4423",
            }}
          >
            wooden doors · glass doors · railings
          </div>
          <div
            style={{
              fontSize: 138,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              fontWeight: 300,
            }}
          >
            wooden doors,
            <br />
            <span style={{ fontStyle: "italic" }}>beautifully made.</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontSize: 22,
            color: "#4A423A",
          }}
        >
          <span>encorewoodcrafts.in</span>
          <span style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}>
            3 families · 22 reference designs
          </span>
        </div>
      </div>
    ),
    size
  );
}
