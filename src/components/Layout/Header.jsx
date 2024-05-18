import { Avatar, AvatarFallback, AvatarImage } from "@shadcn-ui/avatar";
import { Button } from "@shadcn-ui/button";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.h1}>🍀 My Todo List</h1>
        <Button variant="outline" asChild>
          <a href="https://github.com/1eeyerin" target="_blank">
            @1eeyerin
          </a>
        </Button>
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/40863185?v=4"
            alt="@1eeyerin"
          />
          <AvatarFallback>YR</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};

const styles = {
  header: [
    "sticky",
    "top-0",
    "flex",
    "h-16",
    "items-center",
    "gap-4",
    "border-b",
    "px-4",
    "md:px-6",
    "backdrop-blur",
    "backdrop-blur-sm",
    "z-10",
  ].join(" "),
  nav: [
    "hidden",
    "flex-col",
    "gap-6",
    "text-lg",
    "font-medium",
    "md:flex",
    "md:flex-row",
    "md:items-center",
    "md:gap-5",
    "md:text-sm",
    "lg:gap-6",
    "w-full",
    "justify-between",
  ].join(" "),
  h1: ["text-lg", "font-semibold", "w-full"].join(" "),
};

export default Header;
