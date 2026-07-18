import './globals.scss';

export const metadata = {
  title: "Diamond International Beauty — Beauty Parlour in Port Saeed, Deira, Dubai",
  description:
    "Diamond International Beauty is a premier beauty parlour in Port Saeed, Deira, Dubai. Professional hair care, botox & keratin treatments, Moroccan baths, manicures, and bridal makeup.",
  keywords: "Diamond International Beauty, beauty parlour Port Saeed, ladies salon Deira, Moroccan bath Dubai, hair botox Deira",
  openGraph: {
    title: "Diamond International Beauty — Beauty Parlour in Port Saeed, Deira, Dubai",
    description:
      "Diamond International Beauty is a premier beauty parlour in Port Saeed, Deira, Dubai. Professional hair care, botox & keratin treatments, Moroccan baths, manicures, and bridal makeup.",
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
