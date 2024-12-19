import { useState } from "react"

import "./App.css"

import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"
import ListForm from "./components/ListForm"

function App() {
  const [lists, setLists] = useState([
    {
      id: 1,
      name: "Lista Principal",
      todos: [
        {
          id: 1,
          text: "criar funcionalidade x no sistema",
          category: "Trabalho",
          isCompleted: false,
        },
        {
          id: 2,
          text: "ir pra academia",
          category: "Pessoal",
          isCompleted: false,
        },
      ],
    },
  ])

  const [currentListId, setCurrentListId] = useState(1) 

  const addList = (name) => {
    const newList = {
      id: Math.floor(Math.random() * 10000),
      name,
      todos: [],
    }
    setLists([...lists, newList])
  }

  const removeList = (id) => {
    const filteredLists = lists.filter((list) => list.id !== id);
    setLists(filteredLists);

    if (currentListId === id && filteredLists.length > 0) {
      setCurrentListId(filteredLists[0].id);
    } else if (filteredLists.length === 0) {
      setCurrentListId(null); 
    }
  };

  const addToDo = (text, category) => {
    setLists(
      lists.map((list) =>
        list.id === currentListId
          ? {
              ...list,
              todos: [
                ...list.todos,
                {
                  id: Math.floor(Math.random() * 10000),
                  text,
                  category,
                  isCompleted: false,
                },
              ],
            }
          : list
      )
    )
  }

  const removeToDo = (id) => {
    setLists(
      lists.map((list) =>
        list.id === currentListId
          ? { ...list, todos: list.todos.filter((todo) => todo.id !== id) }
          : list
      )
    )
  }

  const completeToDo = (id) => {
    setLists(
      lists.map((list) =>
        list.id === currentListId
          ? {
              ...list,
              todos: list.todos.map((todo) =>
                todo.id === id
                  ? { ...todo, isCompleted: !todo.isCompleted }
                  : todo
              ),
            }
          : list
      )
    )
  }

  return (
    <div className="app">

      <h1>Gerenciador de Listas de Tarefas</h1>

      <div>
        <h2>Listas Criadas:</h2>
        <ul>
          {lists.map((list) => (
            <li
              key={list.id}
              onClick={() => setCurrentListId(list.id)}
              style={{
                cursor: "pointer",
                fontWeight: currentListId === list.id ? "bold" : "normal",
                opacity: currentListId === list.id ? "1" : "0.5",
              }}
            >
  
              <span onClick={() => setCurrentListId(list.id)}>
                {list.name}
              </span>
              <button
                className="remove"
                style={{ marginLeft: "20px" }}
                onClick={() => removeList(list.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
        
        <ListForm addList={addList} />
        
      </div>

     
      <div className="ToDo-List">
        {lists
          .find((list) => list.id === currentListId)
          ?.todos.map((todo) => (
            <Todo
              key={todo.id}
              ToDo={todo}
              removeToDo={removeToDo}
              completeToDo={completeToDo}
            />
          ))}
      </div>

      <TodoForm addToDo={addToDo} 
      currentListName={lists.find((list) => list.id === currentListId)?.name}/>
    </div>
  )
}

export default App
