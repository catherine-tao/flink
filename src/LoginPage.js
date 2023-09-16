import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allowProceed, setAllowProceed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        // const res = await fetch("localhost:3000/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     }, 
        //     body: JSON.stringify({
        //         email,
        //         password,
        //     }),
        // });

        // const data = await res.json();
        // if (data.user) {
        //   localStorage.setItem("token", data.user);
        // }

        // console.log("data", data); // delete later

        // if (data.signedIn) {
        //     setAllowProceed(true);
        //   } else {
        //     setErrorMessage(data.message);
        //   }
    }

    return (
        <div className="LoginPage">
          <h1>LOGIN</h1>
          <form onSubmit={handleLogin}>
            <h4>Username</h4>
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

export default LoginPage;
