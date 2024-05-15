import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Todo = ({
  id,
  title,
  isDone,
  description,
  handleDeleteTodo,
  handleChangeTodoState,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className={styles.description}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className={styles.footer}>
        <Button variant="destructive" onClick={() => handleDeleteTodo(id)}>
          삭제하기
        </Button>
        <Button
          variant={isDone ? "secondary" : "default"}
          onClick={() => handleChangeTodoState(id)}
        >
          {isDone ? "취소하기" : "완료하기"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const styles = {
  cardBox: ["grid", "w-full", "items-center", "gap-4"].join(" "),
  col: ["flex", "flex-col", "space-y-1.5"].join(" "),
  footer: ["flex", "justify-between"].join(" "),
  description: ["pt-2"].join(" "),
};

export default Todo;
