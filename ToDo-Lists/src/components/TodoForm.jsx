/* eslint-disable react/prop-types */
import {useState} from 'react'

const TodoForm = ({ addToDo }) => {

  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (!value || !category) return
    addToDo(value, category)
    setValue("")
    setCategory("")
  }

  return (
    <div className="Todo-Form">
              <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit} >
            <input type="text" 
            placeholder="Digite o título da tarefa" 
            value={value}
            onChange={(e) =>setValue(e.target.value)}></input>
            <select value={category}
            onChange={(e) =>setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
                <option value="Casa">Casa</option>
                <option value="Outros">Outros</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>

    </div>
  )
}

export default TodoForm