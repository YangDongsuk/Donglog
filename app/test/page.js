"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function BlogPost({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await fetch(`/api/post/1234`);
      const data = await response.json();
      console.log(data);
      setPost(data);
    };

    fetchPostData();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {post.title}
      <br />
      {post.id}
      <br />
      {post.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      <ReactMarkdown>{post.contentHtml}</ReactMarkdown>
    </>
  );
}

export default BlogPost;
