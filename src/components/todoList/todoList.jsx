import React, { Component } from 'react';
import Todo from '../todo/todo';
import AddTodo from '../addTodo/addTodo';

class TodoList extends Component {
    constructor(props){
        super(props);
          this.state = {
            todoList:[],
            activeItem:{
              id:null, 
              title:'',
              completed:false,
            },
            editing:false,
          }
          this.handleChange = this.handleChange.bind(this)
        }
    componentWillMount(){
        this.fetchTasks()
      }
      
      fetchTasks(){
        console.log('Fetching...')
    
        fetch('http://127.0.0.1:8000/api/task-list/')
        .then(response => response.json())
        .then(data => 
          this.setState({
            todoList:data
          })
        
          )
      }
      handleChange(e){
          var name= e.target.name;
          var value=e.target.value;
          console.log("val",value)
          console.log("name",name)
      }
    render() {
        var tasks = this.state.todoList
        return (
          
            <div className="to-do-list">
            <AddTodo myList={this.state.todoList} className="search" />

                <span>
                    {
                        tasks.map((element, index) => {
                            console.log(index)
                            return <Todo item={element} key={index} index={index} />;
                        })
                    }
                </span>
            </div>
        );
    }
}



export default TodoList;
