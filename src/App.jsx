import { Form } from './components/Form/Form'
import { useState } from 'react';
import './App.css'
import { TaskList } from './components/Task-list/TaskList';
import {Title} from "./components/Title/Title";

function App() {
  
  const [item, setItem] = useState([]);

    function handleClick(e){
        e.preventDefault();
        const newTask = {
          id: + new Date(),
          value:e.target.task.value,
          
        }
        
        setItem([...item, newTask])
        e.target.task.value = ""
        
    }
    console.log(item);

    const handleDelete = (id)=>{
      setItem((item) => item.filter(i => i.id !== id));
    }
    
  return (
    <div className="App">
      <Title title={"Todo App"} />
      <Form onSubmit={handleClick} />
      <TaskList deleteTask={handleDelete} item={item} />
    </div>
  )
}

export default App
