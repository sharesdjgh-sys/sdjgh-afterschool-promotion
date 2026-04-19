import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sdjgh-afterschool-promotion.vercel.app"),
  title: "AI·SW 방과후학교 | 서대전여자고등학교",
  description: "인공지능의 기본부터 이미지 생성, 바이브코딩, 4족 로봇 MecDog까지 — 18차시 방과후 특별 프로그램. 1·2학년 대상.",
  openGraph: {
    title: "AI·SW 방과후학교 | 서대전여자고등학교",
    description: "AI부터 로봇까지 — 박사가 직접 가르치는 18차시 방과후학교. 1·2학년 누구나 신청 가능.",
    url: "https://sdjgh-afterschool-promotion.vercel.app",
    siteName: "서대전여고 AI·SW 방과후학교",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "서대전여고 AI·SW 방과후학교",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
