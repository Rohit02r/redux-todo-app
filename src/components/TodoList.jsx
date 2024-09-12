import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeTodo, updateTodo } from '../features/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editTask, setEditTask] = useState('');

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditTask(todo.task);
  };

  const handleUpdate = (id) => {
    if (editTask.trim()) {
      dispatch(updateTodo({ id, task: editTask }));
      setEditId(null);
      setEditTask('');
    }
  };

  return (
    <ul className="list-group mt-4">
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {editId === todo.id ? (
            <>
              <input
                type="text"
                className="form-control task-input"
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
              />
              <button
                className=" btn-successz "
                onClick={() => handleUpdate(todo.id)}
              >
                Update
              </button>
            </>
          ) : (
            <>
              <span className="task-text">{todo.task}</span>
              <div className="task-buttons">
                <button className="btn btn-warning" onClick={() => handleEdit(todo)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
