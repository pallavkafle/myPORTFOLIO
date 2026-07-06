import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const imageCandidates = (segments: string[]) => [
  path.join(process.cwd(), "public", "images", ...segments),
  path.join(process.cwd(), ...segments),
  ...(
    segments.length === 1 && segments[0] === "profile.jpg"
      ? [path.join(process.cwd(), "profilephoto.jpg")]
      : []
  ),
  ...(
    segments.length === 1 && segments[0] === "background.jpg"
      ? [path.join(process.cwd(), "background.jpg")]
      : []
  )
];

const fallbackSvg = (label: string) => `
  <svg width="1200" height="1200" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">
    <defs>
      <radialGradient id="g" cx="50%" cy="35%" r="70%">
        <stop offset="0%" stop-color="#2d5d4f" stop-opacity="0.45" />
        <stop offset="55%" stop-color="#0a0f0d" stop-opacity="0.92" />
        <stop offset="100%" stop-color="#050807" />
      </radialGradient>
    </defs>
    <rect width="1200" height="1200" fill="url(#g)" />
    <circle cx="600" cy="500" r="220" fill="#2d5d4f" fill-opacity="0.18" />
    <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="#f5f1e8" font-family="Inter, Arial, sans-serif" font-size="72" font-weight="700">Pallav Kafle</text>
  </svg>
`;

async function readImageFile(segments: string[]) {
  for (const candidate of imageCandidates(segments)) {
    try {
      return await readFile(candidate);
    } catch {
      continue;
    }
  }

  return null;
}

export async function GET(_request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const { path: segments } = await context.params;
  const file = await readImageFile(segments);

  if (file) {
    const extension = segments.at(-1)?.split(".").pop()?.toLowerCase();
    const contentType = extension === "png" ? "image/png" : extension === "webp" ? "image/webp" : extension === "gif" ? "image/gif" : "image/jpeg";
    const isBackgroundImage = segments.length === 1 && segments[0] === "background.jpg";

    return new NextResponse(file, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": isBackgroundImage ? "no-store" : "public, max-age=31536000, immutable"
      }
    });
  }

  const svg = fallbackSvg(segments.join("/") || "image fallback");
  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-store"
    }
  });
}
