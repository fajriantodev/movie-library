import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Navbar from "@/components/navbar";

const ubuntu = Ubuntu({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Movie Library",
  description: "Movie Library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}`}>
        <div className="fixed -z-10 h-screen w-full bg-[url('/img/home-theater.jpg')] bg-cover bg-center">
          <div className="h-full bg-[rgba(0,0,0,0.9)] backdrop-blur-[50px]" />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
