import './globals.scss';

export const metadata = {
  title: "Porto De Belleza — Beauty Parlour in Swissôtel Al Ghurair, Dubai",
  description:
    "Porto De Belleza is a premier luxury beauty parlour located at Swissôtel Al Ghurair in Deira, Dubai. Expert hair styling, coloring, wellness spa treatments, manicures, pedicures, and beauty services.",
  keywords: "Porto De Belleza, beauty parlour Swissotel Al Ghurair, hair salon Deira, wellness spa Dubai, ladies salon Al Muraqqabat",
  openGraph: {
    title: "Porto De Belleza — Beauty Parlour in Swissôtel Al Ghurair, Dubai",
    description:
      "Porto De Belleza is a premier luxury beauty parlour located at Swissôtel Al Ghurair in Deira, Dubai. Expert hair styling, coloring, wellness spa treatments, manicures, pedicures, and beauty services.",
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
