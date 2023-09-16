import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from './pages/signup'
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

  return (
    <div className="App">
      <SignUp/>
    </div>
  );
}

export default App;
