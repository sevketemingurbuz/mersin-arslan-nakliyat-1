import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "@/components/MyNavbar";
import Footer from "@/components/Footer"


const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Arslan Nakliye",
  description: "Profesyonel ve Hızlı Ulaşım Çözümleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
          <div className="d-flex flex-column min-vh-100">
                <MyNavbar />
                <main className="flex-grow-1">{children}</main>
                <Footer />
          </div>
      </body>
    </html>
  );
}
