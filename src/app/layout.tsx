import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  weight: ["500", "900"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Meet landing page";
const description =
  "Meet makes it easy to connect with others face-to-face virtually and collaborate across any device — a Frontend Mentor challenge built with Next.js, TypeScript, and Tailwind CSS.";
const siteUrl = "https://vanta-meet-landing-page.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
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
