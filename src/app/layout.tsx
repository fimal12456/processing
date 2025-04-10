import type { Metadata } from "next";
import "./global.css"
import NavBar from "@/componens/NavBar/NavBar";
import {Jost, Roboto} from "next/font/google";
import Footer from "@/componens/Footer/Footer";


const inter = Roboto({ subsets: ["latin"], weight: ["500"]});



export const metadata: Metadata = {
  title: "JET P2P",
  description: "Платежное решение для High Risk проектов",
  icons: "image/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
