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
  title: "Mane Thindi | Cloud Kitchen Jalahalli, Bengaluru",
  description:
    "Experience authentic Gujarati Snacks, Chaats & Coolers, and Buns from Bengaluru's premier cloud kitchen. Order now for fast delivery.",
  keywords: [
    "Mane Thindi",
    "Cloud Kitchen",
    "Jalahalli",
    "Renaissance Woods",
    "Steamed Idli",
    "Vada Pav",
    "Samosa Chaat",
    "Pani Puri",
    "Bengaluru Food Delivery",
  ],
  authors: [{ name: "Mane Thindi Team" }],
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
