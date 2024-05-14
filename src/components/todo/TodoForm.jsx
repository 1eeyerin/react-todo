import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const defaultValues = {
  title: "",
  description: "",
};

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "제목을 2자 이상 작성해주세요",
  }),
  description: z.string().min(2, {
    message: "내용을 2자 이상 작성해주세요",
  }),
});

const TodoForm = ({ onAddTodo }) => {
  const form = useForm({ defaultValues, resolver: zodResolver(FormSchema) });
  const { control, handleSubmit, reset } = form;

  const onSubmit = (values) => {
    onAddTodo(values);
    reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.formFields}>
          <FormField
            control={control}
            name="title"
            render={({ field }) => (
              <FormItem className={styles.formItem}>
                <FormLabel className={styles.formLabel}>제목</FormLabel>
                <FormControl>
                  <Input placeholder="제목을 입력해주세요" {...field} />
                </FormControl>
                <FormMessage className={styles.errorMessage} />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem className={styles.formItem}>
                <FormLabel className={styles.formLabel}>내용</FormLabel>
                <FormControl>
                  <Input placeholder="내용을 입력해주세요" {...field} />
                </FormControl>
                <FormMessage className={styles.errorMessage} />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className={styles.button}>
          작성하기
        </Button>
      </form>
    </Form>
  );
};

const styles = {
  formContainer: ["space-x-10", "flex", "items-center", "mt-8", "mb-6"].join(
    " "
  ),
  formFields: ["w-full", "flex", "gap-6"].join(" "),
  formItem: [
    "items-center",
    "flex",
    "justify-between",
    "w-full",
    "flex-wrap",
    "relative",
  ].join(" "),
  formLabel: ["flex-shrink-0", "mr-6", "text-sm", "font-medium", "mb-1"].join(
    " "
  ),
  errorMessage: ["absolute", "top-full", "mt-1"].join(" "),
  button: ["mt-6"].join(" "),
};

export default TodoForm;
