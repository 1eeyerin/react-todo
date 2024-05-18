const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

const styles = {
  container: ["max-w-6xl", "m-auto", "min-w-max"].join(" "),
};

export default Container;
