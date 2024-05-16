import { Todo } from "components/Todo";

const TodoList = ({ todos, handleDeleteTodo, handleChangeTodoState }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo
              title={todo.title}
              description={todo.description}
              handleDeleteTodo={handleDeleteTodo}
              handleChangeTodoState={handleChangeTodoState}
              id={todo.id}
              isDone={todo.isDone}
            />
          </li>
        );
      })}
    </ul>
  );
};

const styles = {
  todoList: ["pt-6", "grid", "grid-cols-3", "gap-4"].join(" "),
};

export default TodoList;
