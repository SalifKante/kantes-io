import { ImageResponse } from "next/og";

import { site } from "@/content/site";
import { locales } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Salif Kanté — Research Engineer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Deliberately Latin-only and identical across locales: `ImageResponse` ships
 * no Cyrillic face, so translated copy here would render as tofu.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#20242e",
          color: "#eef1f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#69c6d8",
            }}
          >
            Tomsk · Russia
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 104,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            Salif Kanté
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 38,
              lineHeight: 1.3,
              color: "#a9b2c0",
              maxWidth: 900,
            }}
          >
            Research Engineer — Applied AI &amp; Electromagnetic Compatibility
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #3a4152",
            paddingTop: 28,
            fontSize: 28,
            color: "#a9b2c0",
          }}
        >
          <span>TUSUR University</span>
          <span style={{ color: "#69c6d8" }}>
            {site.url.replace("https://", "")}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
