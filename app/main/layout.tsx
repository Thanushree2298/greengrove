import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Grove",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body 
      className="inter.className root-layout">
        <ShoppingCartProvider>
        <Navbar />
        {children}
        <Footer />
        </ShoppingCartProvider>
        </body>
    </html>
  );
}
