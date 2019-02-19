import {ADD_TODO, CLEAR_TODO, CLICK_TODO} from "./../actions/actions"

let initialState= {

     title:"Tasks List",
     todos:[

     ]


 }


//reducer returns an object,when it is called for the first time itdoesnt have action
export default function reducer(state =initialState,action){

    console.log(action)
    switch(action.type){

       case ADD_TODO:

           let newTodos =     [...state.todos, action.payload];
           return Object.assign({},state,{todos:newTodos})


       case CLEAR_TODO:
           newTodos = [...state.todos]
          
           newTodos = newTodos.filter(todo => {
               return (todo.completed === false);
           })
           
           return Object.assign({},state,{todos:newTodos})


        case CLICK_TODO:

           let todos = [...state.todos]

    
           for (let i=0; i < todos.length; i++) {
               if (todos[i].id === action.payload) {
                   todos[i].completed=!todos[i].completed
               }
           }
     
           return Object.assign({},state,{todos:todos})

       default:
         
            return state;


   }




}
