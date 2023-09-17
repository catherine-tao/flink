import React, { useEffect, useState } from "react";

function Prompt({ email , colorTheme, insta, youtube, tiktok}) {
  const [promptURL, setPromptURL] = useState("");
  const [productUrls, setProductUrls] = useState([]);
  const [backgroundUrlLink, setBackgroundUrlLink] = useState("");
  useEffect(() => {
    const getProductUrls = async () => {
      const res = await fetch(`http://localhost:3000/prompt/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      const loadedUrls = data.productUrls;
      setProductUrls(loadedUrls);
    };

    const getBackgroundUrl = async () => {
      const res = await fetch(`http://localhost:3000/background/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      const backgroundUrl = data.backgroundUrl;
      setBackgroundUrlLink(backgroundUrl);
    };

    getProductUrls();
    getBackgroundUrl()
  }, []);

  const handlePromptSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/prompt/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        promptURL,
      }),
    });

    const jsonData = await res.json();
    const userData = jsonData.userData;
    if (userData) setProductUrls(userData);
  };

  const deleteUrl = async (url) => {
    const res = await fetch(`http://localhost:3000/prompt/delete/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        url,
      }),
    });

    const data = await res.json();

    // const newUrls = productUrls.filter((item) => item != url);
    setProductUrls(data.newProductsUrl);
  };

  return (
    <div>
      <h1>Prompt</h1>
      <form onSubmit={handlePromptSubmit}>
        <input
          value={promptURL}
          onChange={(e) => setPromptURL(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
      {productUrls &&
        productUrls.map((user) => {
          return (
            <div>
              <h3>{user.title}</h3>
              <p>{user.url}</p>
              <button onClick={() => deleteUrl(user.url)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default Prompt;
