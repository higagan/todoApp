import React, { Component } from 'react';

class AddTodo extends Component {
    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    addTodo(event) {
        if (event.key === 'Enter') {
            // this.props.addTodo({ workName: event.target.value });
            // event.target.value = null;
            this.state = {
                
                activeItem:{
                  
                  title:event.target.value,
                  completed:false,
                },
                editing:false,
              }
            var csrftoken = this.getCookie('csrftoken')

            var url = 'http://127.0.0.1:8000/api/task-create/'
            this.activeItem={
               
                title: event.target.value ,
                completed:false
              }
            fetch(url, {
                method:'POST',
                headers:{
                  'Content-type':'application/json',
                  'X-CSRFToken':csrftoken,
                },
                body:JSON.stringify(
                  
                    this.state.activeItem
                    
                    )
              }).then((response)  => {
                // console.log(response)
                window.location.reload();
                console.log(this.props.myList)

               
              }).catch(function(error){
                console.log('ERROR:', error)
              })
          
            }
        }
    

    render() {
        return (
            <div>
            <input type="text" className="search" placeholder="Enter todo work " onKeyDown={event => this.addTodo(event)} />

            </div>
        );
    }
}



export default AddTodo;