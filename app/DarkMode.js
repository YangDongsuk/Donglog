"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DarkMode({ res }) {
  let router = useRouter();

  useEffect(() => {
    if (res == undefined) {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
      console.log("쿠키값이 없습니다.");
    }
  }, []);

  return (
    <span
      onClick={() => {
        // let 쿠키값 = ("; " + document.cookie)
        //   .split(`; mode=`)
        //   .pop()
        //   .split(";")[0];
        // if (쿠키값 == "light") {
        //   document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
        //   router.refresh();
        // } else {
        //   document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
        //   router.refresh();
        // }

        if (res != undefined && res.value == "dark") {
          document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
          router.refresh();
        } else {
          document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
          router.refresh();
        }
      }}
    >
      {res != undefined ? (res.value == "light" ? "🌙" : "☀️") : "🌙"}
    </span>
  );
}
