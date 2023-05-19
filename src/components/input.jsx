import { useState, useContext } from "react";

export default function Input(props) {
    
    
    return (
        <form>
            <input onChange={props.onChange} value={props.text} placeholder="text.." />
            <button onClick={props.onClick}>click</button>
        </form>
    );
}
