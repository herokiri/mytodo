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

const TodoList: FC<ITodoList> = ({ data }) => {
    const [todos, setTodos] = useState(data)

    const [inputValue, setInputValue] = useState('')

    const createTodo = (title: string, e: any) => {
        e.preventDefault()
        const copy = [...todos]
        setTodos(
            [
                {
                    id: Date.now() + '',
                    title: title,
                    isCompleted: false,
                },
                ...copy
            ]
        )
        setInputValue('')

    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(t => t.id !== id))
    }

    return (
        <div>
            <form>
                <input className='post flex bg-gray-800 p-7 rounded-3xl text-white mb-6 w-full' type='text' placeholder='Что надо сделать ....'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <button
                    onClick={(e) => createTodo(inputValue, e)}
                >

                </button>
            </form>
            {todos.map(t =>
                <Todo key={t.id} id={t.id} title={t.title} isCompleted={t.isCompleted} deleteTodo={deleteTodo} />
            )}
        </div>
    )
}

export default TodoList