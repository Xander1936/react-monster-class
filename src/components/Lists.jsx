import React from 'react'

const Lists = () => {
    const numbers = [1, 2, 3, 4, 5];
    const usersInfo = [
        {
            username: "HuXn",
            email: "test@gmail.com",
            location: "USA",
        },
        {
            username: "John",
            email: "jd@gmail.com",
            location: "CANADA",
        },
        {
            username: "Alex",
            email: "alex_xander@gmail.com",
            location: "USA",
        },
    ];

  return (
    <main>
      <div>
        {numbers.map((number) =>(
            <ul key={number}>
                <li>{number}</li>
            </ul>
        ))}
      </div>
      <div>
        {/* Destructuring: Destructure the username, the email and the loaction. */}
        {usersInfo.map(({username, email, location}) => (
            <ul key={Math.random()}>
                <li>{username}</li>
                <li>{email}</li>
                <li>{location}</li>
            </ul>
        ))}
      </div>
    </main>
  )
}

export default Lists
