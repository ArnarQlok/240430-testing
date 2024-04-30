import React, { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Login from "./components/Login";
import TextInput from "./components/TextInput";
import TextDisplay from "./components/TextDisplay";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <>
      <TextInput inputText={inputText} setInputText={setInputText} />
      <TextDisplay inputText={inputText} />
    </>
  );
}

export default App;
