import { Button } from "../Buttons/Button"
import { useState } from "react";
import "./Form.css";

export const Form = ({onSubmit})=>{
    
    
    return (
        <form className="form" onSubmit={onSubmit}>
            <input className="input" type="text" name="task" placeholder="add your new todo" />
            <button className="button" children="+" />
        </form>
    )
}