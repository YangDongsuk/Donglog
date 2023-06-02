"use client";
import { useState, useEffect } from "react";
import ListTab from "./ListTab";
//서버 렌더링으로 하면 노션 데이터베이스에서 데이터 동기화가 잘 되지 않기 때문에 클라이언트 렌더링으로 변경

export default function List() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(
        // "https://donglog.vercel.app//api/notionDatabase/getData",
        "/api/notionDatabase/getData",

        {
          method: "GET",
        }
      );
      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  if (!projects) {
    return <div>Loading...</div>;
  }

  const filteredResults = projects.results.filter(
    (project) => project.properties.Status.status.name === "Done"
  );

  return (
    <div className="list-bg">
      {/* <ListItem result={filteredResults} /> */}
      <ListTab result={filteredResults} />
    </div>
  );
}
