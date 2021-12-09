import React from "react";
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import classes from './ToDoHeader.module.scss';

interface IToDoHeader {
  visibleAllDone: () => void,
  visibleDone: () => void
  visibleNotDone: () => void,
  countsAllDone:number,
  countsUnDone:number
  countsDone:number
}
interface IStateCounts {
  countsUnDone:number,
  countsAllDone:number,
  countsDone:number
}

const ToDoHeader=({visibleAllDone,visibleDone,countsUnDone,visibleNotDone,countsAllDone,countsDone}:IToDoHeader)=>{
    return (
        <>
            <h1 className={classes.app_header}>Todo List</h1>
            <h5>ToDolist: всего задач {countsAllDone}, выполненых {countsDone}, осталось {countsUnDone}</h5>
            <div className={classes.app_counts}>
            <button onClick={visibleAllDone}>Снять фильтер</button>
            <button onClick={visibleDone}>Уже выполнили</button>
            <button onClick={visibleNotDone}>Осталось</button>
            </div>
        </>
    );
  }
  const mapStateToProps = (state:IStateCounts) => {
    const {countsUnDone,countsAllDone,countsDone} = state;
    return {countsUnDone,countsAllDone,countsDone };
  };
  export default connect(mapStateToProps, actions) (ToDoHeader);
  