import { useState } from "react";
import reactLogo from "./assets/react.svg";
import PoemComponent from "./components/Poem";
import { Poem } from "./types/Poem";
import "./App.css";

function App() {
  const poems: Poem[] = [
    {
      title1: "Santiagetti Two.",
      title2: "A wandering watery wrangle at arms \n advances.",
      text: ["para", "para2", "para3"],
    },
    {
      title1: "Santiagetti Two.",
      title2: "A wandering watery wrangle at arms \n advances.",
      text: [
        ["para in Stanza", "par2 in stanza"],
        ["para in Stanza2", "par2 in stanza2"],
      ],
    },
  ];
  return (
    <div>
      <h1 className="h1">A Handful of Poetry</h1>
      <h2 className="h2">The Santiagetti Collection.</h2>
      {poems.map((poem) => {
        return (
          <PoemComponent
            title1={poem.title1}
            title2={poem.title2}
            text={poem.text}
          />
        );
      })}
    </div>
  );
}

export default App;
