import React from "react";
import ToDoHeader from "./ToDoHeader/ToDoHeader";
import TodoList from "./ToDo-list/todo-list";
import Information from "./Information/Information";
import SearchPanel from "./ToDoSearchPanel/Search-panel";
import NewTodo from "./NewTodo/NewTodo";
import Navbar from '../../Navbar';
import classes from'./ToDoMain.module.scss';
import { Provider } from 'react-redux';
import {store} from './redux/store';


const ToDo:React.FC=()=>{
    return (
    <Provider store={store}>
    <div>
        <Navbar/>
        <div className={classes.todo_app}>
        <ToDoHeader/>
            <div className={classes.top_panel}>
                <div>
                    <SearchPanel/>
                </div>
                <div>    
                    <NewTodo/>
                </div>
            </div>
            <TodoList/>   
            <Information/>    
        </div>
    </div>
    </Provider>
    );
  }
  
  export default ToDo;
  