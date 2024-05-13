import { Button } from "@/components/ui/button";
import { css } from "@emotion/react";

const Todo = () => {
  return (
    <div>
      <strong css={titleStyle}>리액트 공부하기</strong>
      <p css={contentStyle}>기초 공부하기</p>
      <div css={buttonWrapStyle}>
        <Button>삭제하기</Button>
        <Button variant="outline">완료</Button>
      </div>
    </div>
  );
};

const titleStyle = css`
  margin-bottom: 15px;
  display: block;
  font-size: 18px;
`;

const contentStyle = css`
  margin-bottom: 15px;
  color: #666666;
`;

const buttonWrapStyle = css`
  display: flex;
  gap: 4px;
  margin-top: 15px;
`;

const buttonStyle = css`
  border-radius: 4px;
  border: 1px solid #000000;
  display: inline-flex;
  padding: 10px 15px;
`;

export default Todo;
