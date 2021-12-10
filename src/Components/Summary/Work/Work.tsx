import React from "react";
import classes from "./Work.module.scss";


const Work:React.FC=()=>{
    return(
        <div className={classes.work}>
            <h2>Опыт работы</h2>
            <h3>Должность: Модератор-оператор ПК  (обслуживание интернет-магазина)</h3>
            <h3>Время: с 06.2018 по 07.2020 (2 года 1 месяц)</h3>
            <h3>Организация: Технічне програмне рішення, Кропивницький</h3>
        </div>
    )
}
export default Work;