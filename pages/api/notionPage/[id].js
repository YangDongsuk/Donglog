import { NotionAPI } from "notion-client";

export default async function handler(req, res) {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(req.query.id);

  res.status(200).json(recordMap);
}
