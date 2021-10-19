import { useState } from "react"

export const LoginPage = ()=>{
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = (e)=>{
            console.log(userName+ "   " + password)
        e.preventDefault();
    }
    return (
        <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleForm}>
          <label>
            <p>Username</p>
            <input type="text"  onChange={(e)=>setuserName(e.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password"  onChange={(e)=>setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
}