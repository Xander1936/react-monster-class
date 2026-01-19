import React, { useRef } from 'react'

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      input.current.focus();
    }
  }

  return (
    <div>
      <input 
        type="text" 
        ref={inputRef} 
        placeholder='Click the button to focus.' 
      />

      <button onClick={FocusInput}>Focus input</button>
    </div>
  )
}

export default FocusInput
