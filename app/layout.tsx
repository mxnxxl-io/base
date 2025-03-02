import type { Metadata } from "next";
import { IBM_Plex_Mono, Roboto_Condensed } from "next/font/google";
import "./globals.css";

// Add font
const mainFont = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Application",
  description: "Data Analysis Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.variable} antialiased font-main`}>{children}</body>
    </html>
  );
}
