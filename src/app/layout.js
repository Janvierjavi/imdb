import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "IMBd Clone",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header*/}
          <Header />
          {/* Navbar*/}
          <Navbar />
          {/* SearchBox*/}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
