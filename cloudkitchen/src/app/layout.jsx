import './globals.scss';

export const metadata = {
  title: "Beauty & Sense Ladies Salon — Beauty Parlour in Al Mamzar, Dubai",
  description:
    "Beauty & Sense Ladies Salon is a premier beauty parlour in Al Mamzar, Deira, Dubai. Professional hair care, styling, nail services, threading, waxing, lash extensions, facials, and bridal makeup.",
  keywords: "Beauty & Sense Ladies Salon, ladies salon Al Mamzar, beauty parlour Deira, hair salon Dubai, home salon service Dubai",
  openGraph: {
    title: "Beauty & Sense Ladies Salon — Beauty Parlour in Al Mamzar, Dubai",
    description:
      "Beauty & Sense Ladies Salon is a premier beauty parlour in Al Mamzar, Deira, Dubai. Professional hair care, styling, nail services, threading, waxing, lash extensions, facials, and bridal makeup.",
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
