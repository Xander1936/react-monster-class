import React from 'react'

// key word props -> props.children

const Card = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Card