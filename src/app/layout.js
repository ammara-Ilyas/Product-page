import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import CartContext from "../../component/contextApi/CartContext";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartContext>
        <body className={inter.className}>{children}</body>
      </CartContext>
    </html>
  );
}
