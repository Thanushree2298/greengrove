import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
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
        {children}
        </ShoppingCartProvider>
        </body>
    </html>
  );
}
