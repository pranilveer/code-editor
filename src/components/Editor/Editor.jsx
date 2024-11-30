import React, { useEffect, useRef, useState } from "react";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { php } from "@codemirror/lang-php";
import { rust } from "@codemirror/lang-rust";
import { go } from "@codemirror/lang-go";
import { cpp } from "@codemirror/lang-cpp";
import "./Editor.css";

const lightTheme = EditorView.theme({
  "&": { backgroundColor: "#ffffff", color: "#000000" },
  ".cm-content": { caretColor: "#000000" },
  ".cm-gutters": { backgroundColor: "#f5f5f5", color: "#999999" },
});

const darkTheme = EditorView.theme({
  "&": { backgroundColor: "#282c34", color: "#ffffff" },
  ".cm-content": { caretColor: "#ffffff" },
  ".cm-gutters": { backgroundColor: "#333333", color: "#aaaaaa" },
});

const languageConfig = {
  JavaScript: javascript(),
  Python: python(),
  PHP: php(),
  Rust: rust(),
  Go: go(),
  Swift: javascript(), // Using JavaScript as a placeholder for Swift
  "C/C++": cpp(),
};

function Editor({ language, theme }) {
  const editorRef = useRef(null);
  const editorViewRef = useRef(null);
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (editorViewRef.current) {
      editorViewRef.current.destroy();
    }

    const selectedTheme = theme === "dark" ? darkTheme : lightTheme;

    editorViewRef.current = new EditorView({
      parent: editorRef.current,
      extensions: [basicSetup, languageConfig[language] || javascript(), selectedTheme],
    });

    return () => {
      if (editorViewRef.current) {
        editorViewRef.current.destroy();
      }
    };
  }, [language, theme]);

  const handleRunCode = () => {
    const code = editorViewRef.current.state.doc.toString();

    if (code.trim() === "") {
      setOutput("Output: (No code to execute)");
    } else {
      setOutput(`Output: Simulated result for:\n${code}`);
    }
  };

  return (
    <div className={`editor-container ${theme}`}>
      <div className="editor" ref={editorRef}></div>

      <button className="run-button" onClick={handleRunCode}>
        Run Code
      </button>

      <div className={`output-panel ${theme}`}>
        <h3>Output Panel</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default Editor;