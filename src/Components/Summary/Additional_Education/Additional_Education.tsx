import React from "react";
import classes from "./Additional_Education.module.scss";


const AdditionalEducation:React.FC=()=>{
    return(
        <div className={classes.add_education}>
            <h2>Дополнительное Образование</h2>
            <div>
                <div>
                <h3>Время: 2020 г. (6 месяцев)</h3>
                <h3>Направление курса: веб-программирование</h3>
                </div>
                <img src="https://plotnikovzhenia.github.io/MyBiography-React-Redux-ToDo/Certificate.jpg" alt="сертификат"></img>
            </div>
        </div>
    )
}
export default AdditionalEducation;