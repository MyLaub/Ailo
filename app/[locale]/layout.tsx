import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Header from "../global_components/header";

// importing dm-sans font from google fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Ailo Data Solutions",
  description: "Ailo Data Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
