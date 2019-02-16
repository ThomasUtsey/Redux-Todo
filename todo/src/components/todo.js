import React, { Component } from "react";
import { connect } from 'react-redux';
import { addToDo, removeToDo, ADDTODO, REMOVETODO} from '../actions/actions'


export default class Todo extends Component {
constructor(props){
  super (props);
  this.state = {
    todo: props.todo,
    completed: false,
    id: props.todo.id
  }
  todoCompletehandler=() =>{

    this.props.clickTodo(this.state.id)
    this.setState({completed:true})
}
}



render() {

  if (this.state.todo.completed == true) {
      return <div style={{ textDecoration: 'line-through'}}
                  onClick={this.todoCompletehandler}> {this.state.todo.todo} </div>
  } else {
      return <div onClick={this.todoCompletehandler}> {this.state.todo.todo} </div>
  }
}
}

function mapStateToProps(state){
return {}

}

export default connect(mapStateToProps,{clickTodo:clickTodo})(Todo)

