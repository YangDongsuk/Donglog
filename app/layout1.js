import "./globals.css";
import { Providers } from "./providers";

import { Inter } from "next/font/google";
import Link from "next/link";
import LoginBtn from "../history/LoginBtn";
import LogoutBtn from "./LogoutBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { cookies } from "next/headers";
import DarkMode from "./DarkMode";
import DarkMode2 from "./DarkModebyChakra";
// import DarkMode2 from "./DarkModebyChakra";
// import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  let res = cookies().get("mode");
  // console.log(res);

  // console.log(session);
  return (
    <html lang="en">
      <body
        className={res != undefined && res.value == "dark" ? "dark-mode" : ""}
      >
        <Providers>
          <div className="navbar">
            {/* <DarkMode2 res={res} /> */}
            <DarkMode res={res} />
            <DarkMode2 />

            <Link href="/" className="logo">
              GoBongBablog
            </Link>
            <Link href="/list2">List2</Link>
            {session ? (
              <>
                <LogoutBtn />
                {"환영합니다" + session.user.name}
              </>
            ) : (
              <LoginBtn />
            )}
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
