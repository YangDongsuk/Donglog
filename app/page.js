import InfoCard from "./InfoCard";
import TechStack from "./TechStack";

export default function Home() {
  const technologies = [
    "Next.js",
    "Chakra UI",
    "MongoDB",
    "Node.js",
    "React",
    "Aws S3",
    "Vercel",
    "Notion",
  ];

  const icons = [
    "/techstack/nextjs.png",
    "/techstack/chakraui-icon.jpg",
    "/techstack/mongo.jpg",
    "/techstack/nodejs.png",
    "/techstack/react.png",
    "/techstack/s3.webp",
    "/techstack/vercel.webp",
    "/techstack/notion.webp",
  ];

  return (
    <>
      {/* 메인 페이지 헤드 카드 */}
      <InfoCard />
      <TechStack technologies={technologies} icons={icons} />
    </>
  );
}
