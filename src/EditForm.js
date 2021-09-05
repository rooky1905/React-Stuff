import React, { Component } from 'react'

class EditForm extends Component {
    constructor(props){
        super(props);
        this.state = {id :this.props.obj.id, title : this.props.obj.title};
    }
    handleSubmit = (evt) =>{
        evt.preventDefault();
        this.props.updateTodo(this.state)
    }
    handleChange = (evt) => {
        this.setState({[evt.target.name] : evt.target.value})
    }
    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <input name = "title" value = {this.state.title} placeholder="Update" onChange = {this.handleChange}/>
                <button>Update?</button>
            </form>
        )
    }
}

export default EditForm
