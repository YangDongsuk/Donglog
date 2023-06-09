import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Link from "next/link";
import Title2 from "./Title2";
import List from "./List";
// import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  // let res = cookies().get("mode");

  return (
    <html lang="en">
      <body
      // className={res != undefined && res.value == "dark" ? "dark-mode" : ""}
      >
        <Providers>
          <div className="navbar">
            <Link href="/" className="logo">
              {/* <Title /> */}
              <Title2 />
            </Link>
            <Link href="/list3">
              <List />
            </Link>
            {/* <DarkMode2 /> */}
            {/* <DarkMode3 /> */}
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
