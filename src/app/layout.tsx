import type { Metadata } from "next";
import { Jolly_Lodger } from "next/font/google";
import "./globals.css";

const myFont = Jolly_Lodger({
	subsets: ["latin"],
	weight: "400", 
	variable: "--Jolly-Lodger",
});

export const metadata: Metadata = {
  title: "Haxmas Day 1",
  description: "Christmas Clicker Game... Or something like that lmao jk jk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
