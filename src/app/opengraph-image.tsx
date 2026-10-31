import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.brand}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#f4f1ea",
          borderLeft: "24px solid #5e8a47",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#5e8a47", letterSpacing: 4, textTransform: "uppercase" }}>
          {site.brand}
        </div>
        <div style={{ marginTop: 24, fontSize: 76, color: "#1f2c1d", lineHeight: 1.1 }}>
          Understanding You, Beyond Diagnosis.
        </div>
        <div style={{ marginTop: 32, fontSize: 30, color: "#5d5d56" }}>{site.disciplines}</div>
      </div>
    ),
    size,
  );
}
