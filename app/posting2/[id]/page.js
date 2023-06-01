"use client";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";

import { ColorModeScript, Button, useColorMode } from "@chakra-ui/react";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

import Prism from "prismjs";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-markup-templating.js"; // only needed for code highlighting
import "prismjs/components/prism-markup.js"; // only needed for code highlighting

// used for rendering equations (optional)
import "katex/dist/katex.min.css";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";

function BlogPost(props) {
  const [post, setPost] = useState(null);
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("colorMode", colorMode);

  useEffect(() => {
    const fetchPostData = async () => {
      const res = await fetch(`/api/notionPage/${props.params.id}`);
      const recordMap = await res.json();
      setPost(recordMap);
    };

    fetchPostData();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <NotionRenderer
      recordMap={post}
      // fullPage={true}
      darkMode={colorMode === "dark" ? true : false}
      // darkMode={false}
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
