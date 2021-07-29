import React, {useState} from 'react'

function TodoForm(props) {
const [input, setInput] = useState("")

function handleChange(e) {
    setInput(e.target.value)
    console.log("changed")
}

function handleSubmit(e) {
    e.preventDefault()

    props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
    })

    setInput("")
}

    return (
        <div>
            <form className="todoForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="What to do?"
                    value={input}
                    name="text"
                    className="todoInput"
                    onChange={handleChange}
                />
                <button className="todoButton">Add</button>
            </form>
        </div>
    )
}

export default TodoForm
