// Using the key word Props in the Child Component to be used in the parent Component App.jsx 
import React from 'react'

// Props Destructuring: replace the key word props by {img, name, age, isMarried, hobbies}
const User = ({img, name, age, isMarried, hobbies}) => {
  return (
    <section>
        <img src={img} alt={name} width={200} />
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h2>Is married: {isMarried}</h2>
        <h2>Hobbies: {hobbies}</h2>
    </section>
  )
}

export default User;