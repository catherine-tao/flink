// secret key: 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
import { useState } from "react";

function Background() {
    const [backgroundUrl, setBackgroundUrl] = useState("");

    const generate = async(e) => {
        e.preventDefault();
        const email = "hi"

        console.log("reacched");
        
        const OpenAI = require("openai");
        const openai = new OpenAI({
            apiKey: "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",
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
        console.log(backgroundUrl); 
        console.log(result.data[0].url); 
    
        const res = await fetch(`http://localhost:3000/updateData/${email}`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                backgroundUrl,
            }),
        });

    }

    return (
      <div>
        <button onClick={generate}>generate image</button>
      </div>
    );
  }
  
  export default Background;
