"use client";
import { useState, useEffect } from "react";
import * as React from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

export default async function test3() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const response = await fetch(`/api/test/test3`);
      const data = await response.json();
      setPost(data);
    };

    fetchPostData();
  }, [post]);
  if (!post) {
    return <div>Loading...</div>;
  }

  return <NotionRenderer recordMap={post} fullPage={true} darkMode={false} />;
}
