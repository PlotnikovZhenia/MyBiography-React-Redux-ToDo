import React, { useState } from "react";
import ToDoHeader from "./ToDoHeader/ToDoHeader";
import SearchPanel from "./ToDoSearchPanel/Search-panel";
import TodoList from "./ToDo-list/todo-list";
import NewTodo from "./NewTodo/NewTodo";
import Information from "./Information/Information";
import Navbar from '../Navbar';
import classes from'./ToDoMain.module.scss';

interface IToDo{
    label:string,
    done:boolean,
    important:boolean,
    id:number
}

const ToDoComponent=()=>{
    const [todoData,setTodoDate]=useState<IToDo[]>([]); 
    const [beforeFilterDate,setBeforeFilterDate]=useState<IToDo[]>([]);
    const [countsDone,setCountsDone]=useState<number>(0);
    const[countsUnDone,setCountsUnDone]=useState(todoData.length)
    const [countsAllDone,setCountsAllDone]=useState(todoData.length);
    const deleteItem=(id:number)=>{
        const idx=todoData.findIndex((el)=>el.id===id);
        const beforeArray=todoData.concat([]);
        const begin=beforeArray.splice(0,idx);
        const after=todoData.splice(idx+1,todoData.length);
          const newArray=[
        ...begin,
        ...after
        ];
        setTodoDate(newArray);
        setBeforeFilterDate(newArray);
        setCountsAllDone(newArray.length)
    }
    const addItem=(text:string)=>{
        if(text){
        setCountsAllDone(countsAllDone+1)
        setCountsUnDone(countsUnDone+1)
        const newItem={
                label:text,
                important: false,
                done:false,
                id:todoData.length+1,
            }
        setTodoDate([
            ...todoData,
                newItem
        ]);
        setBeforeFilterDate([
            ...todoData,
                newItem
        ]);
     }
    }
    const visibleSearch=(searchText:string)=>{
        if(searchText){
        const searchArray=todoData.filter(item=>item.label.includes(searchText))
        setTodoDate(searchArray);
        setCountsAllDone(searchArray.length)
        const doneArray=searchArray.filter(item=>item.done===true)
        setCountsDone(doneArray.length)
        setCountsUnDone(searchArray.length-doneArray.length)
        }else{
            setTodoDate(beforeFilterDate);
            setCountsAllDone(todoData.length);
    }
}
    const changeItemDone=(id:number)=>{
        const idx=todoData.findIndex((el)=>el.id===id);
        const beforeArray=todoData.concat([]);
        beforeArray[idx].done=!beforeArray[idx].done;
        setTodoDate(beforeArray);
        setBeforeFilterDate(beforeArray);
        const doneArray=todoData.filter(item=>item.done===true)
        setCountsDone(doneArray.length)
        setCountsUnDone(beforeArray.length-doneArray.length)
        
       
    }
    const visibleAllDone=()=>{
        if(beforeFilterDate.length>0){
        setTodoDate(beforeFilterDate)
        setCountsAllDone(beforeFilterDate.length)
        }
    }
    const visibleDone=()=>{
        setTodoDate(beforeFilterDate)
        const doneArray=todoData.filter(item=>item.done===true)
        setTodoDate(doneArray)
        setCountsDone(doneArray.length)
    }
    const visibleNotDone=()=>{
        setTodoDate(beforeFilterDate)
        const undoneArray=todoData.filter(item=>item.done===false)
        setCountsUnDone(undoneArray.length)
        setTodoDate(undoneArray)
    }
    return (
    <div>
        <Navbar/>
        <div className={classes.todo_app}>
            <ToDoHeader countsAllDone={countsAllDone} countsDone={countsDone} countsUnDone={countsUnDone} visibleAllDone={visibleAllDone} visibleDone={visibleDone} visibleNotDone={visibleNotDone} />
            <div className={classes.top_panel}>
                <div>
                    <SearchPanel visibleSearch={visibleSearch} />
                </div>
                <div>
                    <NewTodo addItem={addItem}/>
                </div>
            </div>
            <TodoList onDeleted={deleteItem} changeItemDone={changeItemDone} todos={todoData}/>
            <Information/>
        </div>
    </div>
    );
  }
  
  export default ToDoComponent;
  