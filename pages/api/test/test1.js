import { NotionAPI } from "notion-client";

export default async function handler(req, res) {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage("67546ca4dee444f1b7db520edfca8bac");
  res.status(200).json(recordMap);
}
