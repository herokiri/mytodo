import React, { useState, useMemo } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  

  return (
    <div className="App h-screen bg-gray-900">
      <div className="container">
        <h1 className='p-10 text-white font-semibold text-xl'>
          Todos
        </h1>

        <TodoList data={[]} />
      </div>
    </div>
  );
}

export default App;
