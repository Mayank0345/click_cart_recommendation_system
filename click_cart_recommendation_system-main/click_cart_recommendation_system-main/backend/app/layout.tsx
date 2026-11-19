import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Retail Intelligence",
  description: "AI-powered retail recommendation system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
