import { TodoList } from "@/src/components/Todo";

const EmptyMessage = () => {
  return (
    <div className={styles.emptyMessage}>
      등록된 할 일이 없어요 . . ૮₍ ᓀ ‸ ᓂ ₎ა
    </div>
  );
};

const Wrapper = ({ children, title }) => {
  return (
    <section className={styles.section}>
      <strong className={styles.title}>{title}</strong>
      {children}
    </section>
  );
};

const TodoSection = ({
  title,
  todos,
  handleDeleteTodo,
  handleChangeTodoState,
}) => {
  if (!todos.length) {
    return (
      <Wrapper title={title}>
        <EmptyMessage />
      </Wrapper>
    );
  }

  return (
    <Wrapper title={title}>
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleChangeTodoState={handleChangeTodoState}
      />
    </Wrapper>
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

export default TodoSection;
