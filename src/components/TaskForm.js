import React, { Component } from 'react';

export default class TaskForm extends Component {
    
    state = {
        title :"",
        description :""
    }
    
    /* Si es un solo parametro se puede enviar de esta forma, menos type
    onSubmit=e=>{   
    } */
    
    onSubmit=(e)=>{
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault()
    }

    onChange = e =>{
        // e.target.value
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input name="title" type="text" placeholder="Escribe una tarea" onChange={this.onChange} value={this.state.title}/>
                <br/>
                <br/>
                <textarea name="description" placeholder="Escribe una tarea" onChange={this.onChange} value={this.state.description} />
                <br/>
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}
// Comento esto porque en la clase se exporta, se puede hacer de ambas formas
// export default TaskForm;