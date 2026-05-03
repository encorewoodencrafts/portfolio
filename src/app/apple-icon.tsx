import { ImageResponse } from "next/og";

// Image metadata — Apple recommends 180×180 PNG for touch icons.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * The encore window-mark, composed in HTML+CSS so Satori can rasterise it
 * via {@link ImageResponse}. Mirrors the {@link LogoMark} design used in
 * the header and {@link icon.svg}, but on a charcoal field — Apple home
 * screens look better with a colour-filled tile than with a thin mark on
 * cream paper.
 */
export default function AppleIcon() {
  // Cream + brass tokens kept in sync with `globals.css` fixed colours.
  const cream = "#faf7f2";
  const brass = "#d6b079";
  const charcoal = "#0c0a08";

  // Frame metrics — the outer window is 110×110 centred within the 180×180
  // tile. The "E" is formed by 3 horizontal mullions clipped against a
  // half-width middle stroke, and a faint vertical mullion at 27% from
  // the left.
  const frame = 110;
  const stroke = 4;
  const horizontalY = [0.27, 0.5, 0.73];
  const middleClip = 0.36;
  const spineX = 0.27;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: charcoal,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            // Satori requires `display: flex` on any node with >1 child;
            // its layout role here is purely as an absolute-positioning
            // container, so flex is the cheapest satisfying value.
            display: "flex",
            position: "relative",
            width: frame,
            height: frame,
            border: `${stroke}px solid ${cream}`,
            borderRadius: 2,
          }}
        >
          {horizontalY.map((y, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 0,
                right: i === 1 ? `${middleClip * 100}%` : 0,
                top: `${y * 100}%`,
                height: stroke,
                background: cream,
                transform: "translateY(-50%)",
              }}
            />
          ))}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${spineX * 100}%`,
              width: stroke,
              background: cream,
              opacity: 0.5,
              transform: "translateX(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "78%",
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: brass,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
