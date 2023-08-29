import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment} from "../Features/Counter/counterSlice"


export default function Counter(){
    const count= useSelector((c)=>c.counter.value)
    const dispatch=useDispatch()
    return (
        <>
        <div
        style={{
            display:"flex",
            flexDirection:'column',
            justifyContent:'center',
            width:'90%',
            alignItems:'center'
        }}
        >
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>


        </div>
        </>
    )
}