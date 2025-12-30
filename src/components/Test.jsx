import React from 'react'
import { useState, useEffect } from "react"

const Test = () => {
    // const [value, setValue] = useState(0);
    // const [something, setSomething] = useState(0);
    const [data, setData] = useState([]);

    // if (value > 0) {
    //     useEffect(() => {
    //         console.log("call useEffect");
    //         document.title = `Increment ${value}`;
    //     }, [value]);
    // }

    useEffect(() => {
        async function getData() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data  = await response.json();
            if(data && data.length) setData(data);

        }

        getData();
    }, [])

  return (
    <div>
      {/* <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
      <button onClick={() => setSomething(value + 10)}>Increment by Something</button> */}
      {/* We are using the map method to display objects inside the array from "https://jsonplaceholder.typicode.com/todos" */}
      {data.map(todo => (
        <section key={todo.id}>
            <li key={todo.id}>Title --- {todo.title} </li>
            <li> Body --- {todo.body} </li>
        </section>
      ))}

    </div>
  )
}

export default Test
