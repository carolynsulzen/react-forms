import { useState } from "react";

const SignUpForm = (props) => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState(null);

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try{
      const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`,
        {method: `POST`,
          headers: {"Content-Type": "application/json"},
          body : JSON.stringify({
            username : username,
            password : password
          })
        });
      
      const result = await response.json();
      props.setToken(result.token);

    } catch (error){setError(error.message)};
  }

  return (
    <>
    <h2>Sign up!</h2>
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
      <input placeholder="username" 
        value = {username}
        onChange={(event) => {
        setUsername(event.target.value)
        }}/>
      <input placeholder="password" 
        value = {password}
        onChange={(event)=>{
        setPassword(event.target.value)
      }}/>

      <button>Submit!</button>
    </form>
    </>
  )
}

export default SignUpForm;