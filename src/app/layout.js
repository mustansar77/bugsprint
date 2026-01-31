"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Poppins, Inter } from '@next/font/google';
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // for headings/buttons
  variable: '--font-poppins',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNavbarFooter = pathname === '/login' || pathname === '/register';

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        {!hideNavbarFooter && <Navbar />}
        {children}
        {!hideNavbarFooter && <Footer />}
      </body>
    </html>
  );
}
