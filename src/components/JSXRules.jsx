import React from 'react'

const JSXRules = () => {
  const myName = "Alex_X@nder";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";

  return (
    <div>
        <h1>JSXRules</h1>
        <p>JSX must return a single parent element</p>
        <p>JSX must elements must be properly closed</p>
        <p>
            JSX attributes are written using camelCase (e.g. , className instead of class).
        </p>
        <section>
            <p>2 + 2 = {2 + 2} </p>
            <h1> {myName} </h1>
            <p>My Friends List: {["Alex", "John", "Waheed", "Jordan"]}</p>
            <p>2 * 2 = {multiply(2,2)} </p>
            <p className={specialClass}>This is special class</p>
        </section>
    </div>
  )
}

export default JSXRules