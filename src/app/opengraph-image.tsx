import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ionic Post — Modern Post Production";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#7c5cfc",
            letterSpacing: "-0.03em",
          }}
        >
          ionicpost.co
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#0a0a0a",
            marginTop: 16,
          }}
        >
          coming soon.
        </div>
      </div>
    ),
    { ...size }
  );
}
