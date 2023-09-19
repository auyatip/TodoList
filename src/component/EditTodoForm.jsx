import { useState } from "react";

const EditTodoForm = ( {editTodo, task} ) => {
    const [text, setText] = useState(task.task)

    const handleSubmit = el => {
        el.preventDefault()
        editTodo(text, task.id)
        setText("")
    }
    return (
        <>
        <form className="TodoFrom" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" 
            placeholder="Update Task"
            onChange={(el) => setText(el.target.value)}
            value={text}
            />
            <button type="submit" className="todo-btn">Update</button>
        </form>
        </>
    )
}

export default EditTodoForm;