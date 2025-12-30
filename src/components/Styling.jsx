import React from 'react'

const Styling = () => {
    const styles = {
        color:"white", 
        backgroundColor:"crimson", 
        padding:"2rem"
    };

  return (
    <section>
        <h1 
            style={{
                color:"violet", 
                backgroundColor:"teal", 
                padding:"2rem"
            }}
        >
            Inline Style
        </h1>

        <h1 style={styles}>
            Other Styling with JS variable in React.
        </h1>
    </section>
  )
}

export default Styling
