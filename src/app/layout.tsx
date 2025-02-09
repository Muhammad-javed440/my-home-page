import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-300 flex gap-10 p-8 ">
          <Link href="/">Home</Link>
          <Link href="/homePage">homePage</Link>
          <Link href="/namePage">namePage</Link>
      

        </header>
        {children}
        
        </body>
    </html>
  );
}
