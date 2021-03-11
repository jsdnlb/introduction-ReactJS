import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/tasks.json";

// Components
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";

/* class HelloWorld extends Component {
  state = {
    show: true,
  };
  // Debe hacerse de esta manera, porque haciendolo como una función toca complicar el código con bind(this)
  changeState = () =>{
    this.setState({show: !this.state.show})
  }
  render() {
    if (this.state.show) {
      return (
        <div>
          <hr></hr>
          <h4>{this.props.ocupation}</h4>
          <br></br>
          <hr></hr>
          {this.props.myText}
          <br></br>
          <button onClick={this.changeState}>Cambiar estadoo</button>
        </div>
      );
    }else{
      return <h2>No hay elementos <button onClick={this.changeState}>Cambiar estadoo</button> </h2>
        
    }
  }
} */

/* function HelloWorld(props) {
  return (
    <div>
      <h4>{props.ocupation}</h4>
      <br></br>
      {props.myText}
    </div>
  );
} */

/* class App extends Component {
  render() {
    return (
      <div>
        This is my new Component: <HelloWorld myText="Nombre: Daniel" ocupation="CEO" /> <HelloWorld myText="Nickname: jsdnlb" ocupation="RRHH" />{" "}
      </div>
    );
  }
} */

class App extends Component {
  state = {
    tasks: tasks,
  };
  render() {
    return (
      <div>
        <TaskForm/>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
