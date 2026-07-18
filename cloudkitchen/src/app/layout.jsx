import './globals.scss';

export const metadata = {
  title: "Sibs Style Beauty Lounge L.L.C. — Beauty Parlour in Salah Al Din St, Dubai",
  description:
    "Sibs Style Beauty Lounge L.L.C. is a premier beauty parlour in Deira, Dubai. Expert nail artistry, styling, skincare, brows, and beauty lounge services next to Crowne Plaza Hotel.",
  keywords: "Sibs Style Beauty Lounge, beauty parlour Salah Al Din, hair salon Deira, beauty lounge Muteena, nail salon Dubai",
  openGraph: {
    title: "Sibs Style Beauty Lounge L.L.C. — Beauty Parlour in Salah Al Din St, Dubai",
    description:
      "Sibs Style Beauty Lounge L.L.C. is a premier beauty parlour in Deira, Dubai. Expert nail artistry, styling, skincare, brows, and beauty lounge services.",
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
