import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup"; // For HTML
import "prismjs/components/prism-python";
// 첫번째 방법 JSON을 직접 import

// import staticResponse from "public/67546ca4dee444f1b7db520edfca8bac.json";

async function App() {
  let staticResponse = await fetch(
    "https://notion-api.splitbee.io/v1/page/2e1c133b07b84e49ab7b302803be7ad0",

    // "https://notion-api.splitbee.io/v1/page/67546ca4dee444f1b7db520edfca8bac",
    {
      method: "GET",
    }
  ).then((r) => {
    if (r.status == 200) {
      return r.json();
    } else {
      //서버가 에러코드전송시 실행할코드
      console.log("에러");
    }
  });
  return (
    <div className="App">
      <NotionRenderer // 웹페이지에 노션을 렌더링
        blockMap={staticResponse} // 페이지정보 넣기
        fullPage={true}
        hideHeader={true}
      />
    </div>
  );
}

export default App;
