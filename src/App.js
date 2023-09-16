import './App.css';
import React, {useState} from "react"

function App() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  //userName = "jenny" //setUser("jenny")

  const saveData = async (e) => {
    e.preventDefault();
      const res = await fetch("localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          password
        }),
      });

  }

  // const handleSubmit = async (e) => {
  //   const res = await fetch("https://giftrackerapi.onrender.com/signup/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   });

  //   const data = await res.json();

  //   console.log("res", res);

  //   console.log("data", data);

  //   if (data.userCreated) {
  //     setGoToLogin(true);
  //   } else {
  //     setErrorMessage(data.message);
  //   }
  // };

  return (
    <div className="App">
      <h1>FORM</h1>
      <form onSubmit={saveData}>
        <h4>Username</h4>
        <input value={userName} onChange={(e) => {
          setUserName(e.target.value)
          console.log("username", userName)
        }}>
        </input>
        <h4>Password</h4>
        <input value={password} onChange={(e) => {
          setPassword(e.target.value)
          console.log("password", password)
        }}>
        </input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
