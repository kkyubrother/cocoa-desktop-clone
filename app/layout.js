import "./chota.min.css";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cocoa Desktop Clone",
  description: "Cocoa Desktop Clone",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
