import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@app-components/layout";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Game Distribution",
  description: "Game Distribution, get thousands of games for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
