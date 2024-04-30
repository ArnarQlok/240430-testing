import React from "react";

// TextDisplay component shows the text passed to it
function TextDisplay({ inputText }) {
  return (
    <div
      style={{
        margin: "10px 0",
        padding: "8px",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
      }}
    >
      <p>{inputText}</p>
    </div>
  );
}

export default TextDisplay;
