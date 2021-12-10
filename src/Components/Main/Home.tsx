import React from 'react';
import Navbar from '../Navbar';
import classes from './Home.module.scss';


const Home: React.FC=()=>{
  return (
    <div>
      <Navbar/>
      <div className={classes.home_block}>
      <h1>Приветствую на моей страничке, уважаемый гость !</h1>
      <h3>Здесь в соответствующих разделах Вы сможете увидеть краткие автобиографические данные, достижения обо мне,
         а также ознакомиться на основе данного проекта тем самым с моими знаниями, умениями работы
         с библиотекой React.js, его роутингом, Redux-архитектурой, Typescript</h3>
      </div>
    </div>
  );
}

export default Home;
