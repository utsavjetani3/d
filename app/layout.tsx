import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WelcomeLoader from "@/components/WelcomeLoader";
import ClientFooter from "@/components/ClientFooter";
import MainWrapper from "@/components/MainWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Neem Datun | Natural Oral Care Traditional Secrets",
  description: "Experience the ancient wisdom of Neem Datun. Natural tooth care for stronger gums and fresh breath.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans overflow-x-hidden">
        <WelcomeLoader />
        <Navbar />
        <MainWrapper>
          {children}
        </MainWrapper>
        <ClientFooter />
      </body>
    </html>
  );
}
