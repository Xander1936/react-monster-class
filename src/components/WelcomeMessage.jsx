import React from 'react'

const WelcomeMessage = () => {
  return (
    <div>
        <h1>Hello, World!</h1>
        <p>Welcome to learning JSX!</p>
        <section id="section">
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your name" />
            </form>
        </section>
    </div>
  )
}

export default WelcomeMessage