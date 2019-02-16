import React, { Component } from 'react';
import './App.css';
import Todo from './components/todo'
import TodoForm from './components/toDoForm';
import TodoList from "./components/todolist";
import {connect} from "react-redux"


class App extends Component {
  constructor (props){
    super (props);
    this.state={
      listName:'',
    }
  }
  addTodo = (input)=>{
    let newTodo ={
      todo: input,
      completed: false
    }

  }
  render() {
    return (
      <div className="App">
      <h1>{this.props.listName}</h1>
    
      <TodoList/>
      <TodoForm/>
      </div>
    );
  }
}

function mstp(state){
  return{listName: state.title }
}

export default connect(mstp)(App)
