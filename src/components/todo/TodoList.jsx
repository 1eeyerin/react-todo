import { Todo } from "components/todo";

const EmptyMessage = () => {
  return (
    <div className={styles.emptyMessage}>
      등록된 할 일이 없어요 . . ૮₍ ᓀ ‸ ᓂ ₎ა
    </div>
  );
};

const TodoList = ({
  title,
  todos,
  handleDeleteTodo,
  handleChangeTodoState,
}) => {
  const TodoItems = () => {
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

  return (
    <section className={styles.section}>
      <strong className={styles.title}>{title}</strong>
      {!todos.length ? <EmptyMessage /> : <TodoItems />}
    </section>
  );
};

const styles = {
  section: ["mt-20", "mb-20"].join(" "),
  title: ["scroll-m-20", "text-2xl", "font-semibold", "tracking-tight"].join(
    " "
  ),
  todoList: ["pt-6", "grid", "grid-cols-3", "gap-4"].join(" "),
  emptyMessage: [
    "text-base",
    "text-muted-foreground",
    "pt-24",
    "text-center",
  ].join(" "),
};

export default TodoList;
