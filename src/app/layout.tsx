import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import { siteUrl } from "@/app/site";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  weight: ["500", "900"],
  subsets: ["latin"],
  display: "swap",
});

const name = "Meet";
const title = `${name} | Group chat for everyone`;
const description =
  "Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: `The ${name} name under the line Built for modern use, on the brand's dark cyan, beside a photograph of someone on a video call at a laptop.`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafafa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
