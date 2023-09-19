import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'

const Todo = ( {task,toggleCompleted,deleteTodo,editTodo} ) => {
    return (
        <>
        <div className="Todo">
            <p onClick={() => toggleCompleted(task.id)} className={`${task.completed ? 'completed':''}`}>
                {task.task}
                </p>
            <div>
                <AiFillEdit size={25} className='button-to-do' onClick={()=> editTodo(task.id)}/>
                <BsFillTrashFill size={25} className='button-to-do' onClick={()=> deleteTodo(task.id)}/>
            </div>
        </div>
        </>
    )
}

export default Todo;