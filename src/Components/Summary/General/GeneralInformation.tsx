import React from "react";
import classes from "./GeneralInformation.module.scss";


const GeneralInformation:React.FC=()=>{
    const now:Date = new Date();
    let today:Date = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
    let dob:Date = new Date(1993, 10, 4); 
    let dobnow:Date = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    let age:number; 
    age = today.getFullYear() - dob.getFullYear();
    if (today < dobnow) {
        age = age-1;
    }
    return(
        <div className={classes.general_social}>
            <img src="https://plotnikovzhenia.github.io/MyBiography-React-Redux-ToDo/my_photo.jpg" alt="my_photo"/>
            <div>
                <h1>Плотников Евгений Владимирович</h1>
                <h3>Направление: React-разработка</h3>
                <h3>Возраст: полных {age} лет</h3>
                <h3>Город:Кропивницкий (Кировоград)</h3>
                <h3>Языки: украинский, русский, английский (intermediate)</h3>
            </div>
        </div>
    )
}
export default GeneralInformation;