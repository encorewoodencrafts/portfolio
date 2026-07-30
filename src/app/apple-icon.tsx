import { ImageResponse } from "next/og";

// Image metadata — Apple recommends 180×180 PNG for touch icons.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * The official Encore "E", composed in HTML/CSS so Satori can rasterise it
 * on the brand's slate field.
 */
export default function AppleIcon() {
  const paper = "#f7f8fa";
  const slate = "#505863";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: slate,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "relative",
            width: 112,
            height: 112,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: 24,
              background: paper,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 112,
              height: 24,
              background: paper,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 44,
              left: 16,
              width: 82,
              height: 24,
              background: paper,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 112,
              height: 24,
              background: paper,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
