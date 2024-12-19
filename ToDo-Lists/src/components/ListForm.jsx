/* eslint-disable react/prop-types */
import { useState } from "react"

const ListForm = ({ addList }) => {
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    addList(name)
    setName("")
  }

  return (
    <div className="List-Form">
      <h3>Criar nova lista de tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da lista"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Criar lista</button>
      </form>
    </div>
  );
};

export default ListForm;

