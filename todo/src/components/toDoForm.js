import React from "react";
import {connect} from "react-redux";
import {addTodo,clearTodo} from "../actions/actions"



class TodoForm extends React.Component{

    constructor(){
        super();
        this.state={
            inputValue:""
        }


    }
    changeInputValue=e=>{
        this.setState({inputValue:e.target.value})
    }

    createNewTodo=e=>{
        e.preventDefault();
        this.props.addTodo(this.state.inputValue,Date.now())
        this.setState({inputValue:""})
    }
    clearClicked=(event) => {

        event.preventDefault();
        this.props.clearTodo();
    }

    render(){
        return (
            <div>
            <form onSubmit={this.createNewTodo}>

                <input  type="text" placeholder="Write your todo"
                   value={this.state.inputValue}     onChange={this.changeInputValue}/>
                <button type="submit" className="add">Add Task</button>

            </form>

            <button onClick={this.clearClicked} className="clear">Delete Task</button>
            </div>
        )

    }

}

function mapStateToProps(state){
    return {}

}

export default connect(mapStateToProps,{addTodo:addTodo, clearTodo:clearTodo})(TodoForm) 