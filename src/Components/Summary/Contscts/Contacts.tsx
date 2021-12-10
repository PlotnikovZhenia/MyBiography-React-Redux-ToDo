import React from "react";
import classes from "./Contacts.module.scss";

const Contacts:React.FC=()=>{
    return(
        <div className={classes.social}>
            <h2>Контакты</h2>
            <div className={classes.social_details}>
                <h3>Телефон: 066-95-58-415</h3>
                <div className={classes.mail}>
                    <h3>Email: niaplotzhekovni@gmail.com</h3>
                </div>
                <div className={classes.social_networks}>
                    <h3>Социальные сети:</h3>
                    <a href="https://www.facebook.com/niaplotzhekovni"><img src="https://plotnikovzhenia.github.io/MyBiography-React-Redux-ToDo/facebook.svg" alt="facebook"/></a>
                    <a href="https://www.instagram.com/zhenia__plotnikov/" ><img src="https://plotnikovzhenia.github.io/MyBiography-React-Redux-ToDo/instagram.svg" alt="instagram"/></a>
                    <a href="https://t.me/PlotnikovEugeniy" ><img src="https://plotnikovzhenia.github.io/MyBiography-React-Redux-ToDo/telegram.svg" alt="telegram"/></a>
                </div>
            </div>
        </div>
    )
}
export default Contacts;