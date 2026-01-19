import React from 'react'
import { useEffect } from "react";

// Another way with useEffect
const BasicEffect = () => {
  useEffect(() => {
    console.log('BasicEffect component mounted.')
  },[])

  return (
    <div>
      <h1>Check the console to see the message</h1>
    </div>
  )
}

export default BasicEffect