import type { Metadata } from "next";
import { Orbitron, Inter, Roboto_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Juice Lover Koramangala | Juice Shop Koramangala, Bengaluru",
  description:
    "Experience 100% pure fresh juices, smoothies, shakes, and mocktails from Bengaluru's premier juice shop. Order now for fast delivery.",
  keywords: [
    "Juice Lover Koramangala",
    "Koramangala Juice Shop",
    "Koramangala 4th Block",
    "Paragon Prima",
    "Fresh Juice",
    "Mocktails",
    "Smoothies",
    "Shakes",
    "Bengaluru Food Delivery",
  ],
  authors: [{ name: "Juice Lover Koramangala Team" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${barlowCondensed.variable} ${inter.variable} ${robotoMono.variable} h-full`}
    >
      <body
        style={{
          background: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "var(--font-inter), sans-serif",
          overflowX: "hidden",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
