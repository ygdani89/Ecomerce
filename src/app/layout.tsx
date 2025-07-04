
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import './globals.css'
import { geistMono , geistSans , titleFont } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Patórn | Bar",
  description: "Restaurante & Bar",
  icons: {
    icon: '/favicon.ico', // <- Esto es lo importante
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
