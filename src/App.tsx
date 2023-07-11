import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const todos = [
    {
      id: '1',
      title: 'buy broad',
      isCompleted: false,
    },
    {
      id: '2',
      title: 'сходить погулять ',
      isCompleted: false,
    },
    {
      id: '3',
      title: 'встретиться с друзьями',
      isCompleted: false,
    },
    {
      id: '4',
      title: 'купить молоко',
      isCompleted: false,
    },
    {
      id: '5',
      title: 'закончить вуз',
      isCompleted: false,
    }
  ]

  return (
    <div className="App h-screen bg-gray-900">
      <div className="container">
        <h1 className='p-10 text-white font-semibold text-xl'>
          Todos
        </h1>
        <TodoList data={todos}/>
      </div>
    </div>
  );
}

export default App;
