import React from "react";

// TextInput component takes text input and sends it to the parent via onChange
function TextInput({ inputText, setInputText }) {
  return (
    <input
      type="text"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      placeholder="Type something..."
      style={{ padding: "8px", margin: "10px 0", width: "300px" }}
    />
  );
}

export default TextInput;
