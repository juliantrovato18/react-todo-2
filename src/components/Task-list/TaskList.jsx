import { Button } from "../Buttons/Button"
import { Task } from "../Task/Task"
import "./TaskList.css"

export const TaskList = ({item, deleteTask})=>{

        
    return (
        <div>
            <ul>
            {item.map((t)=>(
                <div className="task-list">
                <Task id={t.id} value={t.value} />
                <Button onClick={()=>deleteTask(t.id)} className="button2">Del</Button>
                </div>
            ))}
            </ul>
        </div>
    )
}