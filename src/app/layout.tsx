import type { Metadata } from "next";
import { Noto_Sans_JP, Roboto_Mono } from "next/font/google";

import "./globals.css";
import PageNavHeader from "@/components/PageNavHeader";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ウエハラレイデイオ",
  description: "ウエハラレイデイオは、ウエハラレイデイオの公式サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body
        className={`${notoSansJP.variable} ${robotoMono.variable} antialiased`}
      >
        <PageNavHeader
          contents={[
            { label: "プロフィール", href: "#profile" },
            { label: "基本情報", href: "#info" },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
