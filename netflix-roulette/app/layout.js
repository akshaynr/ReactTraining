import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BootstrapClient />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
