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

  return (
    
      <div className='app'>

          <h1>Lista de Tarefas</h1>
          <div className='ToDo-List'>
            {ToDos.map((ToDo) => (
             <Todo ToDo={ToDo}/>
            ))}

          </div>
       
          <TodoForm/>

      </div>
  )
}

export default App