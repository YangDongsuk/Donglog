"use client";
import { useEffect, useState } from "react";
async function hello() {
  let [data, setDatas] = useState("");

  useEffect(() => {
    let data = fetch("/api/notionDatabase/getData", {
      method: "GET",
    })
      .then((r) => {
        if (r.status == 200) {
          console.log("성공");
          return r.json();
        } else {
          console.log("에러");
          throw new Error("API 요청에 실패했습니다.");
        }
      })
      .then((data) => {
        setDatas(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const projects = await res.json();
  // console.log(projects);
  // console.log(projects.results[0].properties);

  // const projectNames = projects.results.map(
  //   (aProject) => aProject.properties.Name.title[0].plain_text
  // );
  // const tags = projects.results.map(
  //   (aProject) => aProject.properties.카테고리.select.name
  // );

  // const status = projects.results.map(
  //   (aProject) => aProject.properties.Status.status.name
  // );

  // const discription = projects.results.map(
  //   (aProject) => aProject.properties.설명.rich_text[0].plain_text
  // );
  // const ids = projects.results.map((aProject) => aProject.id);
  // console.log(`projectNames : ${projectNames}`);
  // console.log(`tags : ${tags}`);
  // console.log(`status : ${status}`);
  // console.log(`discription : ${discription}`);
  // console.log(`ids : ${ids}`);

  return <div>sd</div>;
}

export default hello;
