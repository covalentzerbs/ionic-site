import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Cursor from "./components/Cursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ionicpost.co"),
  title: "ionic post",
  description:
    "Ionic Post is a modern post production house. Coming soon.",
  keywords: [
    "post production",
    "video editing",
    "color grading",
    "sound design",
    "VFX",
    "motion graphics",
    "ionic post",
  ],
  authors: [{ name: "Ionic Post" }],
  creator: "Ionic Post",
  publisher: "Ionic Post",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ionicpost.co",
    siteName: "Ionic Post",
    title: "ionic post",
    description:
      "Ionic Post is a modern post production house. Coming soon.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ionic Post — Modern Post Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ionic post",
    description:
      "Ionic Post is a modern post production house. Coming soon.",
    images: ["/og-image.png"],
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
