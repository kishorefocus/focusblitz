import './globals.scss';

export const metadata = {
  title: "Primera Beauty Salon — Beauty Parlour in Al Rigga Rd, Dubai",
  description:
    "Primera Beauty Salon is a premier beauty parlour in Deira, Dubai. Professional hair care, styling, nail services, threading, Moroccan baths, and beauty salon treatments.",
  keywords: "Primera Beauty Salon, beauty parlour Al Rigga Rd, ladies salon Deira, Moroccan bath Dubai, hair salon Al Muraqqabat",
  openGraph: {
    title: "Primera Beauty Salon — Beauty Parlour in Al Rigga Rd, Dubai",
    description:
      "Primera Beauty Salon is a premier beauty parlour in Deira, Dubai. Professional hair care, styling, nail services, threading, Moroccan baths, and beauty salon treatments.",
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
