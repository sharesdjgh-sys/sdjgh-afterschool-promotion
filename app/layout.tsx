import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI·SW 방과후학교",
  description: "인공지능의 기본부터 이미지 생성, 바이브코딩, 4족 로봇 MecDog까지 — 18차시 방과후 특별 프로그램. 1·2학년 대상.",
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
