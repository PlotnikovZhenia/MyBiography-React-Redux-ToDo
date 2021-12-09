import React from "react";
import { Link } from "react-router-dom";
import classes from './Error.module.scss';
import Navbar from "./Navbar";

const Error=()=>{
    return(
        <>
        <Navbar/>
        <div className={classes.error_information}>
                <h1>404 Not Found</h1>
                <p>Указаный адрес пока что не существует</p>
                <Link to="/">Назад к главной</Link>
        </div>
        </>
    )
}
export default Error;