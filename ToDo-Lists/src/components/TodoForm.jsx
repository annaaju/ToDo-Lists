

const TodoForm = () => {
  return (
    <div className="Todo-Form">
        <h2>Criar tarefa:</h2>
        <form >
            <input type="text" placeholder="Digite o título da tarefa"></input>
            <select>
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