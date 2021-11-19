import React from "react";
import Form from "./Form";
var btnText = "";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form userIsRegistered = {userIsRegistered}/>
    </div>
  );
}

export default App;
