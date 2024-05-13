import Header from "./component/Header";
import TodoList from "./component/TodoList";
import WriteForm from "./component/WriteForm";

function App() {
  return (
    <>
      <Header />
      <WriteForm />
      <TodoList title="Working... 🔥" />
      <TodoList title="Done... 🔍" />
    </>
  );
}

export default App;
