/* eslint-disable react/prop-types */


const Todo = ({ ToDo }) => {
  return (
    <>
        <div className='Todo'>
                <div className='content'> 
                  <p>{ToDo.text}</p>
                  <p className='category'>({ToDo.category})</p>
                </div>
                <div>
                  <button className="done">Feito</button>
                  <button className="remove">X</button>
                </div>
              </div>
    </>
  )
}

export default Todo