import React from 'react'
import { useEffect } from "react";

// Another way with useEffect
const BasicEffect = () => {
  useEffect(() => {
    console.log('BasicEffect component mounted.')
  },[])

  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect