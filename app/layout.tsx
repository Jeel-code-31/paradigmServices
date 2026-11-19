import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MaintenancePage from "@/components/MaintenancePage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Under Maintenance | Paradigm",
  description: "Paradigm is making improvements. Please check back soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <MaintenancePage />
      </body>
    </html>
  );
}
