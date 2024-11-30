

import React, { useState } from 'react'


function Myhouk(){
    const [count, setCount] = useState(0)
    const incrementer = () => {
        setCount(count +1)
    }
    const decrementer = () => {
        setCount(count -1)
    }
    return(
        <div>
            <p>compteur : {count}</p>
            <button onClick={incrementer}>incrementer</button>
            <button onClick={decrementer}>decrementer</button>
        </div>
    )

}
export default Myhouk;