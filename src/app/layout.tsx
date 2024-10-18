import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SideBar } from "@/components/side-bar";
import { Toaster } from "@/components/toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Slots Demo",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "public/icons/icon2.png",
      type: "image/png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "public/icons/icon2.png",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-row w-full h-full">
          <div className="w-[200px] flex-shrink-0">
            <SideBar />
          </div>
          <div className="flex-grow">{children}</div>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
