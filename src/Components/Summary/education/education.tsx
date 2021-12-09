import React from "react";
import classes from "./education.module.scss";


const Education:React.FC=()=>{
    return(
        <div className={classes.education}>
            <h2>Образование</h2>
            <table>
                <tbody>
                <tr>
                    <th>№</th>
                    <th>Период времени</th>
                    <th>Название ВУЗа</th>
                    <th>Специальность</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2011-2017</td>
                    <td>КГПУ им. В.Винниченка</td>
                    <td>История (магистр)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2019-2021</td>
                    <td>ЦГПУ (КГПУ) им. В.Винниченка</td>
                    <td>Компьютерные науки (магистр)</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Education;