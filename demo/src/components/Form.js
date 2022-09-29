import React, {useState} from 'react'
import $ from 'jquery'

const Form = () =>{
    const [input,setInput] = useState("")
    const inputHandeler =(e) =>{
        setInput(e.target.value)
    console.log('Added todo', e.target.value)
    
    }

    const submit = () => {
        console.log('input',input)
        console.log('process.env.REACT_APP_BACKEND_URL',`${process.env.REACT_APP_BACKEND_URL}/home`)
        $.ajax({
            method: 'POST',
            url: `${process.env.REACT_APP_BACKEND_URL}/home`,
            data:JSON.stringify(input),
            contentType: "application/json",
            success: (res) =>{
                console.log("success", res)
            },
            error: (error) =>{
                console.log('Faild', error)
            }

        })
    }
    return (
        <>
            <input type="text" className="todo-input" placeholder="Add your task here" name="task"
            onChange={inputHandeler }
            />
<button onClick={() => submit() } >Add</button>
            <h1>{input}</h1>

            
        </>
    )
}
 export default Form