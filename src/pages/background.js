// secret key: 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
import { useState } from "react";

function Background() {
    const [backgroundUrl, setBackgroundUrl] = useState("");

    const generate = async() => {
        const email = "hi"

        const OpenAI = require("openai");
        const openai = new OpenAI({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true
        });

        const prompt = "generate a background image for makeup, beauty, vlogger";

        const result = await openai.images.generate
        ({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        })

        setBackgroundUrl(result.data[0].url);
    
        const res = await fetch(`http://localhost:3000/background/${email}`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                backgroundUrl,
            }),
        });

        const data = await res.json();

    }

    return (
      <div>
        <button onClick={generate}>generate image</button>
      </div>
    );
  }
  
  export default Background;
