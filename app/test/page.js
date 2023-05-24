"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function BlogPost({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await fetch(`/api/post/${postId}`);
      const data = await response.json();

      // 'contentHtml'에서 "code"를 "Code"로 대체
      const contentHtml = data.contentHtml.replace(/code/g, "Code");

      // 대체한 'contentHtml'을 'data' 객체에 업데이트
      const updatedData = { ...data, contentHtml };

      console.log(updatedData);
      setPost(updatedData);
    };

    fetchPostData();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          style={solarizedlight}
          language={language}
          children={value}
        />
      );
    },
  };

  // 'ReactMarkdown'에 커스텀 렌더러를 적용
  return <ReactMarkdown children={post.contentHtml} renderers={renderers} />;
}

export default BlogPost;
