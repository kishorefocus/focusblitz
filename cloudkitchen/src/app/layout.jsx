import './globals.scss';

export const metadata = {
  title: "Desert Wave Ladies Salon Dubai — Beauty Parlour in Al Muraqqabat, Dubai",
  description:
    "Desert Wave Ladies Salon Dubai is a premier beauty parlour in Al Muraqqabat, Deira. Professional hair care, styling, nail art, threading, waxing, facials, and beauty treatments.",
  keywords: "Desert Wave Ladies Salon Dubai, ladies salon Al Muraqqabat, beauty parlour Deira, hair salon Dubai, nail salon Deira",
  openGraph: {
    title: "Desert Wave Ladies Salon Dubai — Beauty Parlour in Al Muraqqabat, Dubai",
    description:
      "Desert Wave Ladies Salon Dubai is a premier beauty parlour in Al Muraqqabat, Deira. Professional hair care, styling, nail art, threading, waxing, facials, and beauty treatments.",
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
