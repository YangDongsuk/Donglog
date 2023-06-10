import { NotionAPI } from "notion-client";

export default async function handler(req, res) {
  const notion = new NotionAPI();
  const pageId = "67546ca4dee444f1b7db520edfca8bac";
  const recordMap = await notion.getPage(pageId);
  // const recordMap = await notion.getPage("67546ca4dee444f1b7db520edfca8bac");
  // const recordMap = await notion.getPage(
  //   "eb1a447e-da32-4c8d-a702-597f7fb82ab1"
  // );
  res.status(200).json(recordMap);
}
