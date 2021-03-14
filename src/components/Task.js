import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/Task.css";

class Task extends Component {
  StyleComptleted() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "gray" : "black",
      textDecoration: this.props.task.done ? "line-through" : "none",
    };
  }
  StyleEnabled() {
    return {
      fontSize: "18px",
      background: this.props.task.done ? "gray" : "#ea2027",
      color: "#FFF",
      border: "none",
      padding: "10px 15px",
      borderRadius: "50%",
      cursor: "pointer",
    };
  }

  changeStyle = () => {
    console.log("🚀 ~ file: Task.js ~ line 27 ~ Task ~ this.props.task.done", this.props.task.done);
  };

  render() {
    Task.propTypes = {
      task: PropTypes.object.isRequired,
    };
    const { task } = this.props;
    return (
      <div style={this.StyleComptleted()}>
        {task.title} - {task.description}
        <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
        <button onClick={this.props.deleteTask.bind(this, task.id)} style={this.StyleEnabled()}>
          X
        </button>
      </div>
    );
  }
}

export default Task;
