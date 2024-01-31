import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const OnDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <p className="name">{title}</p>
      <button type="button" className="button" onClick={OnDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
