import React from 'react';
import {Link} from "react-router-dom";
import classes from './Navbar.module.scss'


const Navbar: React.FC=()=>{
  return (
    <div>
        <ul className={classes.navbar}>
            <li><Link to="MyBiography-React-Redux-ToDo/">Главная</Link></li>
            <li><Link to="/biography">Резюме</Link></li>
            <li><Link to="/todolist">ToDoList (without Redux)</Link></li>
            <li><Link to="/todolistRedux">ToDoList (Redux)</Link></li>
        </ul>
    </div>
  );
}

export default Navbar;