import React from "react";
import {connect}  from "react-redux";///with connect we get the
import Todo from "./todo"


const TodoList =props=> {

    console.log(props);
    return (

        <ul>
            {
                props.myTodos.map((todo) => {

                    return <Todo key={todo.id} todo={todo}></Todo>
                })
            }

        </ul>

    )
}
function mapStateToProps(state){//this argument  state is store

      console.log("In mapStateToProps of Todolist ")
      return {
             myTodos:state.todos,
             title : state.title,
             x: 10
      }
}

export default connect(mapStateToProps)(TodoList) 
