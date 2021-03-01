import React, { Component } from "react";
import "./css/Task.css";

const btnDelete = {
  fontSize: "18px",
  background: "#ea2027",
  color: "#FFF",
  border: "none",
  padding: "10px 15px",
  borderRadius: "50%",
  cursor: "pointer",
};

class Task extends Component {

    StyleComptleted(){
        return{
            fontSize :  "20px",
            color : this.props.task.done ? "gray": "black",
            textDecoration: this.props.task.done ? "line-through": "none"
        }
    }
  render() {
    const { task } = this.props;
    return (
      <div style={this.StyleComptleted()}>
        {task.title} - {task.description}
        <input type="checkbox" />
        <button style={btnDelete}>X</button>
      </div>
    );
  }
}

export default Task;
