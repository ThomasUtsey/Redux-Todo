import React, { Component } from "react";
import { connect } from 'react-redux';
import { addToDo, removeToDo, ADDTODO, REMOVETODO} from '../actions/actions'


export default class Todo extends Component {
constructor(props){
  super (props);
console.log(addToDo)
}



  render() {
    <form onSubmit={addToDo}>
         <input id="e.target.value" type="text" placeholder="Add a comment" style = {{border: 'none'}} />
    </form>
  }
  }

