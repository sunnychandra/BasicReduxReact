import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addfruits } from "../Features/AddFruits";
import { worktobedone } from "../Features/Loding";

export default function Fruits() {
    const [getfruits, setfruits] = useState("");
    const dispatch = useDispatch();

    const handeladdfruit = (e) => {
        e.preventDefault();
        dispatch(addfruits(getfruits));
    };

    const handeletefruit= async(fruitid) => {
        console.log("function called "+fruitid);
        await dispatch(worktobedone(fruitid));
    }


    const allfruits = useSelector(state => state.fruit.fruits);
    const Lodingstatus = useSelector(state => state.loding.status);

    return (
        <>
            <form onSubmit={handeladdfruit}>
                <input placeholder="Enter fruits to be added..." value={getfruits} onChange={(e) => setfruits(e.target.value)}></input>
                <button type="submit">Add</button>
            </form>
            <h1>List of all the fruits</h1>
            {allfruits.map((todo) => (
            <div key={todo.id}>{todo.text}
            <button onClick={()=>handeletefruit(todo.id)}>Delete</button></div>

            ))}
            <h3>{Lodingstatus}</h3>


        </>
    )

}

