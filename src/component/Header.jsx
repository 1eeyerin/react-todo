import { css } from "@emotion/react";

const Header = () => {
  return (
    <header css={rootStyle}>
      <h1>My Todo List</h1>
      <p>React</p>
    </header>
  );
};

const rootStyle = css`
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  padding: 0 3%;
`;

export default Header;
