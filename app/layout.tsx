import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "@/components/MyNavbar";
import Footer from "@/components/Footer";
import Ping from "@/components/Ping";
import FabMenu from "@/components/FabMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mersin Arslan Nakliyat",
  description:
    "Mersin'de profesyonel ve hızlı nakliyat hizmetleri. Evden eve, ofis ve fabrika taşımacılığı.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#0d6efd",
  alternates: {
    canonical: "https://mersinarslannakliyat.com/",
  },
  openGraph: {
    title: "Mersin Arslan Nakliyat",
    description:
      "Mersin'de profesyonel ve hızlı nakliyat hizmetleri. Evden eve, ofis ve fabrika taşımacılığı.",
    url: "https://www.mersinarslannakliyat.com/",
    siteName: "Mersin Arslan Nakliyat",
    type: "website",
  },
  keywords:
    "nakliyat, nakliye, mersin nakliyat, mersin nakliye, taşımacılık, ofis taşıma, evden eve, fabrika",
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
          <FabMenu />
          <Footer />
        </div>
      </body>
    </html>
  );
}
