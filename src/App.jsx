import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import { useState } from `react`;

const App = () => {
  const [ token , setToken ] = useState (null);

  return (
    <>
      <h1>hello forms</h1>

      <SignUpForm token = {token} setToken = {setToken}/>
      <Authenticate token = {token} setToken = {setToken}/>
    </>
  )
}

export default App
