import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KOFEC (PVT) LTD",
  description: "KODFEC (PVT) LTD",
  creator: "KODFEC (PVT) LTD",
  authors: [
    {
      name: "KODFEC Team",
      url: "https://kodfec.com",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script className="tidio-chat"
          src="//code.tidio.co/rd2643pqrzs7s4tj6eh8cse2wiokhmsk.js"
          async
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
