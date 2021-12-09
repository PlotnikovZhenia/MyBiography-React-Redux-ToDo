import React from 'react';
import Biography from './Components/Summary/Biography';
import Home from './Components/Main/Home';
import ToDoComponent from './Components/ToDo/ToDoMain';
import ToDo from './Components/ToDoWithRedux/ComponentsOfToDo/ToDoMain';
import Error from './Components/Error';
import { Routes,Route} from "react-router-dom";


const App: React.FC=()=>{
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/biography" element={<Biography/>}/>
        <Route path="/todolist" element={<ToDoComponent/>}/>
        <Route path="/todolistRedux" element={<ToDo/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
