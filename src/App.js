import React, { Component } from "react";
import "./App.css";

/* class HelloWorld extends Component {
  render() {
    return <div>Hello world</div>;

  }
} */

function HelloWorld(props) {
  return (
    <div>
      <h4>{props.ocupation}</h4>
      <br></br>
      {props.myText}
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        This is my new Component: <HelloWorld myText="Nombre: Daniel" ocupation="CEO" /> <HelloWorld myText="Nickname: jsdnlb" ocupation="RRHH" />{" "}
      </div>
    );
  }
}

export default App;
