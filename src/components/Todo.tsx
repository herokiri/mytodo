import React, { FC, useState } from 'react'
import { BsCheck, BsTrash3Fill } from 'react-icons/bs'

interface IPost {
    id: string,
    title: string,
    isCompleted: boolean,
    deleteTodo: (id: string) => void,
}

const Todo: FC<IPost> = ({ id, title, isCompleted, deleteTodo }) => {
    const [completed, setCompleted] = useState(isCompleted)

    return (
        <div className="post flex bg-gray-800 p-7 rounded-3xl text-white mb-6">
            <button
                onClick={() => setCompleted(!completed)}
            >
                {!completed ?
                    <div className='w-7 h-7 border-2 border-white rounded-lg  mr-7' /> :
                    <BsCheck className='w-7 h-7 border-2 bg-red-900 border-red-900 rounded-lg mr-7' />
                }
            </button>
            {completed ?
                <p className="title font-semibold line-through">
                    {title}
                </p>
                :
                <p className="title font-semibold">
                    {title}
                </p>
            }

            <button
                onClick={() => deleteTodo(id)}
                className='ml-auto'
            >
                <BsTrash3Fill />
            </button>
        </div>
    )
}

export default Todo