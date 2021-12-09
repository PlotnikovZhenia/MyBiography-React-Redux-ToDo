import React from 'react';
import TodoListItem from './todo-list-item';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';
import { IItem} from '../Types/types';
import './todo-list.scss';

interface ITodoListProps {
  todoDate: IItem[],
  deleteItem: (id: number) => void,
  changeItemDone: (id: number) => void
}
interface IState{
  todoDate: IItem[],
  beforeFilterDate: IItem[]
}

const TodoList= ({todoDate, deleteItem, changeItemDone}:ITodoListProps) => {
  const elements = todoDate.map((item, index) => {
    const { id, ...itemProps } = item;
    return (
      <tr key={id} className="table-group-item">
        <TodoListItem {...itemProps }  onDeleted={()=>deleteItem(id)} changeItemDone={()=>changeItemDone(id)} index={index} />
      </tr>
    );
  });
  return (
   <table className="table-group">
    <tbody>
      { elements }
    </tbody>
    </table>
  );
};
const mapStateToProps = (state:IState) => {
  const {todoDate,beforeFilterDate} = state;
  return { todoDate,beforeFilterDate};
};

export default connect(mapStateToProps,actions) (TodoList);
