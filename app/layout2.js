import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Link from "next/link";
import DarkMode2 from "./DarkModebyChakra";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="navbar">
            <DarkMode2 />

            <Link href="/" className="logo">
              GoBongBablog
            </Link>
            <Link href="/list2">List2</Link>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
