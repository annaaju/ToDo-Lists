/* eslint-disable react/prop-types */


const Todo = ({ ToDo, removeToDo, completeToDo }) => {
  return (
    <>
        <div className='Todo'
        style={{textDecoration : ToDo.isCompleted ? "line-through" : ""}}
        >
                <div className='content'> 
                  <p>{ToDo.text}</p>
                  <p className='category'>({ToDo.category})</p>
                </div>
                <div>
                  <button className="done" onClick={() => completeToDo(ToDo.id)}
                  >Feito</button>
                  <button className="remove" onClick={() => removeToDo(ToDo.id)}
                  >Excluir</button>
                </div>
              </div>
    </>
  )
}

export default Todo