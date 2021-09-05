import React, {useState} from 'react'
import Child from './child'

function Parent () {

    const [word , setWord] = useState(' i am from Parent')
    return (
        <div>
            <h1>{word}</h1>
            <Child changeWord={word => setWord(word)}/>
        </div>
    )
}

export default Parent;
