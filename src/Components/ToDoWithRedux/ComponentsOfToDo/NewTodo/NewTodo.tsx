import React,{useState} from'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

interface IAddProps {
    addItem: (text: string) => void;
  }

const NewTodo=({addItem}:IAddProps)=>{
    const [text,setText]=useState('');
    const textInput=(event:  { target: HTMLInputElement; })=>{
        setText(event.target.value);
    }
const pushItem=()=>{
    if(text){
    addItem(text);
    setText('');
    }
}
    return(
    <>
        <input type="text" value={text} placeholder="добавить" onChange={textInput}/>
        <button onClick={pushItem} >
            Добавить пункт
        </button>
    </>
    )
}


export default connect(null, actions) (NewTodo);