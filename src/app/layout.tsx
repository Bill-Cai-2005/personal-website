import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bill C",
  description: "Personal site",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-4xl mx-auto px-6 pt-20 pb-12">{children}</main>
      </body>
    </html>
  );
}
