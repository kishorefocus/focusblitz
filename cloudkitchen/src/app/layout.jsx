import './globals.scss';

export const metadata = {
  title: "Pinas Spa and Beauty Center — Beauty Parlour in Al Rigga, Dubai",
  description:
    "Pinas Spa and Beauty Center Al Rigga is a premier beauty parlour in Deira, Dubai. Expert hair styling, coloring, spa treatments, manicures, pedicures, and beauty care.",
  keywords: "Pinas Spa and Beauty Center, beauty parlour Al Rigga, hair salon Deira, beauty salon Al Muraqqabat, ladies spa Dubai",
  openGraph: {
    title: "Pinas Spa and Beauty Center — Beauty Parlour in Al Rigga, Dubai",
    description:
      "Pinas Spa and Beauty Center Al Rigga is a premier beauty parlour in Deira, Dubai. Expert hair styling, coloring, spa treatments, and beauty care.",
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
