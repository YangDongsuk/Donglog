import { NotionAPI } from "notion-client";

export default async function handler(요청, 응답) {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage("067dd719a912471ea9a3ac10710e7fdf");
  console.log(recordMap);
  return 응답.status(200).json(recordMap);
}
