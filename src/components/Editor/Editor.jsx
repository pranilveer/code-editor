import React, { useEffect, useRef } from "react";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { php } from "@codemirror/lang-php";
import { rust } from "@codemirror/lang-rust";
import { go } from "@codemirror/lang-go";
import { cpp } from "@codemirror/lang-cpp";
import "./Editor.css";

const languageConfig = {
  JavaScript: javascript(),
  Python: python(),
  PHP: php(),
  Rust: rust(),
  Go: go(),
  Swift:  javascript(), // Using JavaScript as a placeholder for Swift
  "C/C++": cpp(),
};

function Editor({ language, theme }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      new EditorView({
        parent: editorRef.current,
        extensions: [basicSetup, languageConfig[language] || javascript()],
      });
    }
  }, [language]);

  return <div className={`editor ${theme}`} ref={editorRef}></div>;
}

export default Editor;
