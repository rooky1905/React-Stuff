import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm';
import EditForm from './EditForm';
import "./Todos.css";

class Todos extends Component {
    constructor(props){
        super(props);
        this.state = {todos: [{id : "1122333", title: "Buy Milk", isComplete : false, isEditing : false}, 
                            {id : "1122434", title: "Buy Chips for me", isComplete : true, isEditing : false}]}
    }

    delete = (id) => {
        let to = this.state.todos.filter((el) => ( el.id !== id))
        this.setState({todos : to});
    }

    edit = (id) => {
        let to = this.state.todos.map((el) => {
            if(el.id === id){
                el.isEditing = !el.isEditing;
            }
            return el;
        })
        this.setState({todos : to});
    }

    updateTodo = (todo) => {
        let to = this.state.todos.map((el) => {
            if(el.id === todo.id){
                el.title = todo.title;
                el.isEditing = false;
                el.isComplete = false;
            }
            return el;
        })
        this.setState({todos : to});
    }

    addTodo = (todo) => {
        this.setState((st) =>{
            return {
                todos : [...st.todos, todo]
            }
        })
    }

    checkOff = (id) =>{
        let to = this.state.todos.map((el) => {
            if(el.id === id){
                el.isComplete = !el.isComplete;
            }
            return el;
        })
        this.setState({todos : to});
    }

    render() {
        let todos = this.state.todos.map((el) => (
            el.isEditing ? <EditForm key = {el.id} obj = {el} updateTodo = {this.updateTodo} /> : <Todo key = {el.id} obj = {el} checkOff = {this.checkOff} delete = {this.delete} edit = {this.edit}/>
        ))
        
        return (
            <div>
                <h2>Your Todos!</h2>
                <br /><br /><br />
                    {todos}
                <TodoForm addTodo = {this.addTodo}/>
            </div>
        )
    }
}

export default Todos
