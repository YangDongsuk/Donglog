"use client";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

import Prism from "prismjs";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-markup-templating.js"; // only needed for code highlighting
import "prismjs/components/prism-markup.js"; // only needed for code highlighting

// used for rendering equations (optional)
import "katex/dist/katex.min.css";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";

import dynamic from "next/dynamic";

import { getPageTitle } from "notion-utils";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => {
    // additional prism syntaxes
    await Promise.all([
      import("prismjs/components/prism-markup-templating.js"),
      import("prismjs/components/prism-markup.js"),
      import("prismjs/components/prism-bash.js"),
      import("prismjs/components/prism-c.js"),
      import("prismjs/components/prism-cpp.js"),
      import("prismjs/components/prism-csharp.js"),
      import("prismjs/components/prism-docker.js"),
      import("prismjs/components/prism-java.js"),
      import("prismjs/components/prism-js-templates.js"),
      import("prismjs/components/prism-coffeescript.js"),
      import("prismjs/components/prism-diff.js"),
      import("prismjs/components/prism-git.js"),
      import("prismjs/components/prism-go.js"),
      import("prismjs/components/prism-graphql.js"),
      import("prismjs/components/prism-handlebars.js"),
      import("prismjs/components/prism-less.js"),
      import("prismjs/components/prism-makefile.js"),
      import("prismjs/components/prism-markdown.js"),
      import("prismjs/components/prism-objectivec.js"),
      import("prismjs/components/prism-ocaml.js"),
      import("prismjs/components/prism-python.js"),
      import("prismjs/components/prism-reason.js"),
      import("prismjs/components/prism-rust.js"),
      import("prismjs/components/prism-sass.js"),
      import("prismjs/components/prism-scss.js"),
      import("prismjs/components/prism-solidity.js"),
      import("prismjs/components/prism-sql.js"),
      import("prismjs/components/prism-stylus.js"),
      import("prismjs/components/prism-swift.js"),
      import("prismjs/components/prism-wasm.js"),
      import("prismjs/components/prism-yaml.js"),
    ]);
    return m.Code;
  })
);

function BlogPost() {
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const res = await fetch("/api/test/test1");
      const recordMap = await res.json();
      const title = getPageTitle(recordMap);
      setTitle(title);
      setPost(recordMap);
    };

    fetchPostData();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <NotionRenderer
        recordMap={post}
        // fullPage={true}
        darkMode={false}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
        }}
      />
    </>
  );
}

export default BlogPost;
