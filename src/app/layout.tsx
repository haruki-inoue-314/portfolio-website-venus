import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3.14 Laboratory",
  description: "さんてんいちよんの研究室です",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-200">{children}</body>
    </html>
  );
}
