"use client";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";

// react-notion-x를 사용하기 위해 필요한 기본 스타일 시트를 import하고 있다.
// 이 스타일은 react-notion-x의 모든 컴포넌트에서 공유되는 핵심 스타일을 포함한다.
import "react-notion-x/src/styles.css";

import Prism from "prismjs";

// 코드 블록의 문법 강조에 사용되는 prism.js 테마를 import하고 있다.
// 테마는 선택 사항이며, 사용자의 선호에 따라 다른 prism.js 테마를 사용할 수 있다.
import "prismjs/themes/prism-tomorrow.css";

// Notion에서 사용할 수 있는 추가 컴포넌트를 import하고 있다.
// NotionRenderer는 이 컴포넌트들을 사용해 Notion 페이지의 다양한 부분을 렌더링한다.
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";

function BlogPost(props) {
  // 상태 변수 post를 선언하고 초기값을 null로 설정한다.
  // 이 변수는 API로부터 불러온 게시글 데이터를 저장할 것이다.
  const [post, setPost] = useState(null);

  // useEffect 훅을 사용해 컴포넌트가 렌더링된 후 API에서 데이터를 불러오는 함수를 호출한다.
  // 이 훅은 컴포넌트가 처음 마운트 될 때 한 번만 실행된다.
  useEffect(() => {
    const fetchPostData = async () => {
      // props로 받아온 id를 이용해 API를 호출하여 해당 페이지의 데이터를 가져온다.
      const res = await fetch(`/api/notionPage/${props.params.id}`);
      const recordMap = await res.json();
      // API 응답으로부터 받은 데이터를 post 상태에 저장한다.
      setPost(recordMap);
    };

    fetchPostData();
  }, []);

  // post가 아직 null인 경우(즉, 데이터가 아직 로드되지 않은 경우) 로딩 메시지를 반환한다.
  if (!post) {
    return <div>로딩중...</div>;
  }

  // NotionRenderer 컴포넌트를 사용하여 API에서 불러온 데이터를 렌더링한다.
  // 이 컴포넌트는 Notion 페이지의 구조와 스타일을 파악하여 적절하게 HTML 요소를 생성한다.
  return (
    <NotionRenderer
      recordMap={post}
      components={{
        Code,
        Collection,
        Equation,
        Modal,
      }}
    />
  );
}

export default BlogPost;
