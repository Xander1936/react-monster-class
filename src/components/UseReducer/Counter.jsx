import React, { useReducer, useState } from "react";
import { counterReducer, initialState } from "../UseReducer/CounterReducer";


const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0);

    const handleDecrement = () => dispatch({type: 'decrement'});
    const handleIncrement = () => dispatch({type: 'increment'});

    const handleIncrementByAmount = () => {
      dispatch({type: 'incrementByAmount', payload: +inputValue})
      setInputValue(0);
    }

    const handleDecrementByAmount = () => {
      dispatch({type: 'decrementByAmount', payload: +inputValue})
      setInputValue(0);
    }

  return (
    <>
      <div>
        <h2>Count: {state.count}.</h2>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div>
        <input 
          type="number" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button onClick={handleDecrementByAmount} >Subtract</button>
        <button onClick={handleIncrementByAmount} >Add</button>
      </div>
    </>
  )
}

export default Counter;
