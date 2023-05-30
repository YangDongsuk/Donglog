async function App() {
  const TOKEN = process.env.NOTION_SECRET;
  const DATABASE_ID = "ec8fbd8ce1c7475da616a8876802fa6b";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();
  console.log(projects);
  console.log(projects.results[0].properties);

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.Name.title[0].plain_text
  );
  const tags = projects.results.map(
    (aProject) => aProject.properties.카테고리.select.name
  );

  const status = projects.results.map(
    (aProject) => aProject.properties.Status.status.name
  );

  const discription = projects.results.map(
    (aProject) => aProject.properties.설명.rich_text[0].plain_text
  );
  const ids = projects.results.map((aProject) => aProject.id);
  console.log(`projectNames : ${projectNames}`);
  console.log(`tags : ${tags}`);
  console.log(`status : ${status}`);
  console.log(`discription : ${discription}`);
  console.log(`ids : ${ids}`);

  return <div>res</div>;
}

export default App;
