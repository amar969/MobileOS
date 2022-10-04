import React from 'react'

export const Counter = () => {

    const [count, setCount] = React.useState(0)

    const handleChange = (val) => {
        setCount(count + val)
    } 

  return (
    <>
    <div>
        <h2>Counter - { count }</h2>  
    </div>
    
    <button onClick={() => handleChange(1)} >+</button>
    <button onClick={() => handleChange(-1)} disabled={count == 0}>-</button>
    </>
  )
}
