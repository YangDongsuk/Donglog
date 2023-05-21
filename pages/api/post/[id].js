import { remark } from "remark";
import html from "remark-html";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import remarkReact from "remark-react";
import { createElement } from "react"; // createElement를 import 추가

export default async function handler(req, res) {
  const { id } = req.query;
  const fullPath = path.join(process.cwd(), "public/mdfile", `${id}.md`); // Markdown 파일이 있는 폴더 경로로 변경해주세요
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  // Combine the data with the id and contentHtml
  res.status(200).json({
    id,
    contentHtml,
    ...matterResult.data,
  });
}
