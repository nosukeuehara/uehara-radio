import type {Metadata} from "next";
import {Noto_Sans_JP, Roboto_Mono} from "next/font/google";

import "./globals.css";
import PageNavHeader from "@/components/PageNavHeader";
import {pageNaveContents} from "@/utils/pageNav";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "ウエハラレィディオ | ウエハラ シンタロウの公式サイト",
  description:
    "ウエハラレィディオは、ウエハラ シンタロウが運営するポッドキャスト・YouTube・stand.fmの公式サイトです。プロフィールや番組情報、おたより投稿フォームなどをご利用いただけます。",
  keywords:
    "ウエハラレィディオ,ウエハラ,シンタロウ,ポッドキャスト,YouTube,stand.fm,ラジオ",
  authors: [{name: "ウエハラ"}],
  creator: "ウエハラ シンタロウ",
  publisher: "ウエハラレィディオ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://ueharaleideo.com",
    title: "ウエハラレィディオ | ウエハラ シンタロウの公式サイト",
    description:
      "ウエハラレィディオは、ウエハラ シンタロウが運営するポッドキャスト・YouTube・stand.fmの公式サイトです。",
    siteName: "ウエハラレィディオ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ウエハラレィディオ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ウエハラレィディオ | ウエハラ シンタロウの公式サイト",
    description:
      "ウエハラレィディオは、ウエハラ シンタロウが運営するポッドキャスト・YouTube・stand.fmの公式サイトです。",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ueharaleideo.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#27515c" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={`${notoSansJP.variable} ${robotoMono.variable} antialiased`}
      >
        <PageNavHeader contents={pageNaveContents} />
        <main>{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "ウエハラ シンタロウ",
              alternateName: "ウエハラレィディオ",
              url: "https://ueharaleideo.com",
              sameAs: [
                "https://youtube.com/channel/UCFOWXeiF9qJ-qe7EsTLd7Hg",
                "https://stand.fm/channels/657094b97376b3f936e79489",
              ],
              jobTitle: "ポッドキャスター",
              description: "ポッドキャスト・YouTube・stand.fmで活動中",
            }),
          }}
        />
      </body>
    </html>
  );
}
