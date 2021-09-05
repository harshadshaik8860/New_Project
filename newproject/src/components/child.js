import React from 'react'

function Child(props) {
    return (
        <div>
            
            <button onClick={(e)=>props.changeWord('harshad from Child')}> Button from Child please click</button>
        </div>
    )
}

export default Child
