import './globals.scss';

export const metadata = {
  title: "Zang Beauty Dubai — Beauty Parlour in Al Rigga, Dubai",
  description:
    "Zang Beauty Dubai is a premier beauty parlour and clinic in Deira near Union Metro Station. Specializing in Vietnamese permanent makeup, skincare, HydraFacials, and eyelash extensions.",
  keywords: "Zang Beauty Dubai, Vietnamese microblading, beauty parlour Al Rigga, hair salon Deira, beauty clinic Union Metro, aesthetic salon Dubai",
  openGraph: {
    title: "Zang Beauty Dubai — Beauty Parlour in Al Rigga, Dubai",
    description:
      "Zang Beauty Dubai is a premier beauty parlour and clinic in Deira near Union Metro Station. Specializing in Vietnamese permanent makeup, skincare, HydraFacials, and eyelash extensions.",
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
