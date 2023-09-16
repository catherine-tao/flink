import React, {useState} from "react"

function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault();
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

  }

  return (
    <div className="App">
      <h1>FORM</h1>
      <form onSubmit={handleSignup}>
        <h4>Email</h4>
        <input value={email} onChange={(e) => {
          setEmail(e.target.value)
          console.log("email", email)
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

export default Signup;
