import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Container, Header } from "components/layout";
import { TodoForm, TodoList } from "components/todo";
import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const STORAGE_NAME = "todos";

const getTodoFromLocalStorage = () => {
  return JSON.parse(getLocalStorage(STORAGE_NAME) || "[]");
};

const setTodoFromLocalStorage = (value) => {
  setLocalStorage(STORAGE_NAME, JSON.stringify(value));
};

const App = () => {
  const { toast } = useToast();
  const [todos, setTodos] = useState(getTodoFromLocalStorage());

  const addTodo = (newTodo) => {
    setTodos((prevTodo) => {
      const result = [
        ...prevTodo,
        { ...newTodo, id: new Date().getTime(), isDone: false },
      ];

      setTodoFromLocalStorage(result);
      return result;
    });

    toast({
      title: "투두가 추가되었어요 🐹",
      description: "목표 달성을 위해 파이팅해요!",
    });
  };

  const deleteTodo = (targetId) => {
    setTodos((prev) => {
      const result = prev.filter(({ id }) => id !== targetId);
      setTodoFromLocalStorage(result);

      return result;
    });

    toast({
      title: "삭제되었어요 🗑",
      description: "목표 달성을 위해 파이팅해요!",
    });
  };

  const changeTodoState = (targetId) => {
    setTodos((prev) => {
      const result = prev.map((item) => {
        return item.id === targetId ? { ...item, isDone: !item.isDone } : item;
      });

      setTodoFromLocalStorage(result);

      const isDone = result.find((item) => item.id === targetId).isDone;
      const message = isDone
        ? "투두가 완료되었어요 🐥"
        : "투두가 진행중으로 변경되었어요 🏃🏻";

      toast({
        title: message,
        description: "목표 달성을 위해 파이팅해요!",
      });

      return result;
    });
  };

  return (
    <>
      <Header />
      <Container>
        <TodoForm onAddTodo={addTodo} />
        <TodoList
          title="Working... 🔥"
          todos={todos.filter((todo) => !todo.isDone)}
          handleDeleteTodo={deleteTodo}
          handleChangeTodoState={changeTodoState}
        />
        <TodoList
          title="Done... 🌟"
          todos={todos.filter((todo) => todo.isDone)}
          handleDeleteTodo={deleteTodo}
          handleChangeTodoState={changeTodoState}
        />
      </Container>
      <Toaster />
    </>
  );
};

export default App;
