import "./Task.css";


export const Task = ({value})=>{

   
    return (
        <div className="contains-li">
            <li  className="li">{value}</li>
        </div>
    )
}