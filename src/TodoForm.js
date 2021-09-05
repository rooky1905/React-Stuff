import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {id: uuid(), title: "", isCompleted: false}
    }
    handleSubmit = (evt) =>{
        evt.preventDefault();
        this.props.addTodo(this.state);
        this.setState({id: uuid(), title: "", isCompleted: false})
    }
    handleChange = (evt) =>{
        this.setState({[evt.target.name] : evt.target.value})
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor="title">New Todo</label>
                <input name = "title" value = {this.state.title} onChange = {this.handleChange}/>
                <button>Add Todo?</button>
            </form>
        )
    }
}

export default TodoForm
