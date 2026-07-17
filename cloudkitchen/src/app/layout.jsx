import './globals.scss';

export const metadata = {
  title: "Kim's Beauty Salon — Luxury Hair & Beauty in Dubai",
  description:
    "Dubai's premier luxury beauty salon. Expert hair coloring, balayage, keratin treatments, extensions, and exclusive haircare products at Deira Twin Towers.",
  keywords: "luxury salon Dubai, hair salon Deira, balayage Dubai, keratin treatment, hair extensions Dubai",
  openGraph: {
    title: "Kim's Beauty Salon — Luxury Hair & Beauty in Dubai",
    description:
      "Expert hair coloring, balayage, keratin treatments & extensions at Deira Twin Towers, Dubai.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
