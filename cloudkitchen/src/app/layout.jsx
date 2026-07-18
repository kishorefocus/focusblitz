import './globals.scss';

export const metadata = {
  title: "Hollywood Ladies Salon — Beauty Parlour in Al Rigga, Dubai",
  description:
    "Hollywood Ladies Salon Al Rigga branch is a premier beauty parlour in Deira, Dubai. Expert hair care, styling, coloring, nail care, skincare, and bridal beauty treatments.",
  keywords: "Hollywood Ladies Salon, beauty parlour Al Rigga, hair salon Deira, beauty salon Al Muraqqabat, ladies salon Dubai",
  openGraph: {
    title: "Hollywood Ladies Salon — Beauty Parlour in Al Rigga, Dubai",
    description:
      "Hollywood Ladies Salon Al Rigga branch is a premier beauty parlour in Deira, Dubai. Expert hair care, styling, coloring, and beauty treatments.",
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
