import { useState } from "react";

const TodoForm = ( {addTodo} ) => {
    const [text, setText] = useState('')

    const handleSubmit = el => {
        el.preventDefault()
        addTodo(text)
        setText("")
    }
    return (
        <>
        <form className="TodoFrom" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" 
            placeholder="What you think"
            onChange={(el) => setText(el.target.value)}
            value={text}
            />
            <button type="submit" className="todo-btn">submit</button>
        </form>
        </>
    )
}

export default TodoForm;