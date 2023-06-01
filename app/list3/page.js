import ListItem from "./ListItem";

export default async function List() {
  const res = await fetch("http://localhost:3000/api/notionDatabase/getData", {
    method: "GET",
  });
  const projects = await res.json();

  return (
    <div className="list-bg">
      <ListItem result={projects.results} />
    </div>
  );
}
