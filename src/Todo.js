import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    todo = this.props.obj;
    handleClick = () =>{
        this.props.checkOff(this.todo.id)
    }
    handleDelete = () =>{
        this.props.delete(this.todo.id)
    }
    handleEdit = () =>{
        this.props.edit(this.todo.id)
    }
    render() {
        return (
            <div className = "Todo">
                <h3 className = "EachTodo" onClick = {this.handleClick}>{this.todo.isComplete ? <s>{this.todo.title}</s> : <>{this.todo.title}</> }</h3>
                <button onClick = {this.handleDelete}>Del</button>
                <button onClick = {this.handleEdit}>Edit</button>
            </div>
        )
    }
}

export default Todo
