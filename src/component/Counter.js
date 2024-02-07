import React,{useReducer} from "react";

const Counter =()=>{
    const initialState=0;

    const reducer =(state,action)=>{
        switch(action.type){
        case 'add':
            return state+action.payload;
        case 'subtract':
            return state-action.payload;
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
    };

    const[state,dispatch]=useReducer(reducer,initialState);

    return(
        <div>
            <h3>Counter</h3>
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:'subtract',payload:1})}>Decrease</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            <button onClick={()=>dispatch({type:'add',payload:2})}>Increase</button>
        </div>
    )
}
export default Counter