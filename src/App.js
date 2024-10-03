import React, { useState } from "react";

function DictionaryApp() {
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const wordFound = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (wordFound) {
      setDefinition(wordFound.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ marginLeft: "50px", marginTop: "50px", width: "300px" }}>
      {" "}
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a word"
        style={{ padding: "5px", fontSize: "16px", width: "200px" }}
      />
      <button
        onClick={handleSearch}
        style={{ marginLeft: "10px", padding: "5px 10px", fontSize: "16px" }}
      >
        Search
      </button>
      <div style={{ marginTop: "20px" }}>
        <h3>Definition:</h3>
        <p>{definition}</p>
      </div>
    </div>
  );
}

export default DictionaryApp;
