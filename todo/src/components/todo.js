import React from 'react';
import {connect} from "react-redux";
import {targTodo} from "../actions/actions";


class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todo: props.todo,
            completed: false,
        
            id: props.todo.id
        }
    }

    todoHandler=() =>{

        this.props.targTodo(this.state.id)
        this.setState({completed:true})
    }

    render() {

        if (this.state.todo.completed === true) {
            return <div style={{ textDecoration: 'line-through'}}
                        onClick={this.todoHandler}> {this.state.todo.todo} </div>
        } else {
            return <div onClick={this.todoHandler}> {this.state.todo.todo} </div>
        }
    }
}

function mapStateToProps(state){
    return {}

}

export default connect(mapStateToProps,{targTodo:targTodo})(Todo)

