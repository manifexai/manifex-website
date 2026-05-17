import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MANIFEX - AI-Powered Digital Studio",
  description: "Trusted AI studio building modern websites, SaaS products & automation systems for growing brands",
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
