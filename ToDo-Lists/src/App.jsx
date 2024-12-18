/* eslint-disable react/jsx-key */
import { useState } from 'react'

import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  
  const [ToDos, setToDos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  const addToDo = (text, category) => {

    const newToDos = [...ToDos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]

    setToDos(newToDos)

  }

  const removeToDo = (id) => {

    const newToDos = [...ToDos]
    const filteredToDos = newToDos.filter((Todo) => 
      Todo.id !== id ? Todo : null)

    setToDos(filteredToDos)

  }

  const completeToDo = (id) => {
    const newToDos = [...ToDos]
    newToDos.map((Todo) => Todo.id === id ? Todo.isCompleted = !Todo.isCompleted : Todo)
    setToDos(newToDos)
  }

  return (
    
      <div className='app'>

          <h1>Lista de Tarefas</h1>
          <div className='ToDo-List'>
            {ToDos.map((ToDo) => (
             <Todo key={Todo.id} 
             ToDo={ToDo}
             removeToDo={removeToDo}
             completeToDo={completeToDo}/>
            ))}

          </div>
       
          <TodoForm addToDo={addToDo}/>

      </div>
  )
}

export default App