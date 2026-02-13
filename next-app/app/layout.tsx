import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bamboo Village Farm｜町田の農家｜無農薬野菜の直販",
  description: "町田で、まっすぐ育てる野菜。自然の力を活かした無農薬・減農薬野菜を、あなたの食卓へ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
