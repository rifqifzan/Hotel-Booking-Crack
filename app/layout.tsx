import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Updated fonts
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Hotel Booking Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-cream-50`}>
        <SessionProvider session={session}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
