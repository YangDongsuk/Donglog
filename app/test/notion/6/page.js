// import "react-notion/src/styles.css";
// import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
// import { NotionRenderer } from "react-notion-x";
// import "prismjs/components/prism-javascript";
// import "prismjs/components/prism-css";
// import "prismjs/components/prism-markup"; // For HTML
// import "prismjs/components/prism-python";
// import Image from "next/image";
// import Link from "next/link";
// // import { NotionAPI } from "notion-client";
// // import * as React from "react";

// // 첫번째 방법 JSON을 직접 import

// import recordMap from "public/67546ca4dee444f1b7db520edfca8bac.json";

// async function App() {
//   // const notion = new NotionAPI();

//   // const recordMap = await notion.getPage("067dd719a912471ea9a3ac10710e7fdf");

//   // let recordMap = await fetch(
//   //   "https://notion-api.splitbee.io/v1/page/67546ca4dee444f1b7db520edfca8bac",
//   //   {
//   //     method: "GET",
//   //   }
//   // ).then((r) => {
//   //   if (r.status == 200) {
//   //     return r.json();
//   //   } else {
//   //     //서버가 에러코드전송시 실행할코드
//   //     console.log("에러");
//   //   }
//   // });
//   return (
//     <div className="App">
//       {console.log(recordMap)}
//       <NotionRenderer
//         recordMap={recordMap}
//         components={{
//           nextImage: Image,
//           nextLink: Link,
//         }}
//       />
//     </div>
//   );
// }

// export default App;
//page.js를 전부 다 비워두면 로컬에서는 문제가 안생기지만, 배포시에는 문제가 생기는거 같다.
function Test6() {
  return <div>test6</div>;
}
export default Test6;
