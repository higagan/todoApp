import React, { Component } from 'react';

import './todo.css';


class Todo extends Component {
    render() {
        return (
            <div className="to-do">
                <span className="to-do-name">{this.props.item.title}</span>
                <span className="space"></span>
                <button className="to-do-edit" >Edit</button>
                <span className="space"></span>
                <button className="to-do-delete" onClick={() => this.props.deleteTodoById(this.props.index)}>Delete</button>
            </div>
        );
    }
}



export default Todo;
