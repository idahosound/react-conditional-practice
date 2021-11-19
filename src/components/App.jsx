import React from "react";
import Form from "./Form";
var btnText = "";

var userIsRegistered = true;

userIsRegistered ? btnText = "Login" : btnText = "Register";

function App() {
  return (
    <div className="container">
      <Form label = {btnText}/>
    </div>
  );
}

export default App;
