import React, { useState } from "react";

function Prompt({email}) {
  const [promptURL, setPromptURL] = useState("");
  const handlePromptSubmit = async(e) => {
    e.preventDefault();
    console.log("promptURL", promptURL)

    const res = await fetch(`http://localhost:3000/prompt/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        promptURL
      }),
    });

    const data = await res.json();
  };

  return (
    <div>
      <h1>Prompt</h1>
      <form onSubmit={handlePromptSubmit}>
        <input value={promptURL} onChange={(e) => setPromptURL(e.target.value)}>
        </input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Prompt;
