import React, { Component } from 'react';

import './App.css';

import TodoList from "./components/todolist";
import {connect} from "react-redux"
import TodoForm from './components/toDoForm';


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
        }

    }
    render() {
        return (
            <div className="App">
                <h1>{this.props.title}</h1>
                <TodoList/>
                <TodoForm/>
               
            </div>
        );
    }
}
function mapStateToProps(state){
    return{ title: state.title}
}

export default connect(mapStateToProps)(App) 
