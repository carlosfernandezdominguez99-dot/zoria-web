import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zoria — Soluciones Digitales";
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
          backgroundColor: "#16E0BD",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            fontSize: 340,
            fontWeight: 800,
            color: "rgba(7,8,10,0.08)",
            letterSpacing: -8,
          }}
        >
          ZORIA
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 26px",
            borderRadius: 999,
            border: "3px solid #07080A",
            backgroundColor: "#FFFFFF",
            fontSize: 24,
            fontWeight: 700,
            color: "#07080A",
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Un solo sitio. Todo lo digital.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 34,
            fontSize: 108,
            fontWeight: 800,
            color: "#07080A",
            letterSpacing: -3,
          }}
        >
          ZORIA
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 22,
            padding: "16px 40px",
            borderRadius: 24,
            border: "3px solid #07080A",
            backgroundColor: "#07080A",
            boxShadow: "10px 10px 0 0 rgba(7,8,10,0.25)",
            fontSize: 32,
            fontWeight: 700,
            color: "#FFFFFF",
          }}
        >
          Reparación · Web · Redes sociales
        </div>
      </div>
    ),
    { ...size }
  );
}
