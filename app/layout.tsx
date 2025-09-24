import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "@/components/MyNavbar";
import Footer from "@/components/Footer";
import Ping from "@/components/Ping";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mersin Arslan Nakliyat",
  description: "Profesyonel ve Hızlı Ulaşım Çözümleri",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#0d6efd",
    alternates: {
    canonical: "https://mersinarslannakliyat.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Ping />
        <div className="d-flex flex-column min-vh-100">
          <MyNavbar />
          <main className="flex-grow-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
