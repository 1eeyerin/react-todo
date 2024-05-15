import { css } from "@emotion/react";
import { CardWithForm } from "./CardWithForm";

const TodoList = ({ title }) => {
  return (
    <section css={sectionStyle}>
      <strong css={titleStyle}>{title}</strong>
      <ul css={listStyle}>
        <li css={itemStyle}>
          <CardWithForm />
        </li>
      </ul>
    </section>
  );
};

const sectionStyle = css`
  max-width: 1200px;
  margin: 80px auto;
`;

const titleStyle = css`
  display: block;
  margin-bottom: 22px;
  font-size: 22px;
`;

const listStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const itemStyle = css`
  width: calc(20% - 8px);
`;

export default TodoList;
