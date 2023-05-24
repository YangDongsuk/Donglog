import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";

// 첫번째 방법 JSON을 직접 import
import staticResponse from "public/67546ca4dee444f1b7db520edfca8bac.json";

function App() {
  return (
    <div className="App">
      <NotionRenderer // 웹페이지에 노션을 렌더링
        blockMap={staticResponse} // 페이지정보 넣기
        fullPage={true}
      />
    </div>
  );
}

export default App;
