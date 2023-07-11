import React, { FC, useState } from 'react'
import Todo from './Todo'
import { title } from 'process'

interface ITodoList {
    data: {
        id: string, 
        title: string,
        isCompleted: boolean,
    }[],
}

const TodoList: FC<ITodoList> = ({data}) => {
    const [todos, setTodos] = useState(data)

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(t => t.id !== id))
    }

    return (
        <div>
            {todos.map(t =>
                <Todo key={t.id} id={t.id} title={t.title} isCompleted={t.isCompleted} deleteTodo={deleteTodo} />
            )}
        </div>
    )
}

export default TodoList