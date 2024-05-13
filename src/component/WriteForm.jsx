import { css } from "@emotion/react";

const WriteForm = () => {
  return (
    <form css={formStyle}>
      <label htmlFor="subject">제목</label>
      <input css={inputStyle} type="text" id="subject" />
      <label htmlFor="content">내용</label>
      <input css={inputStyle} type="text" id="content" />
      <button css={submitBtnStyle} type="submit">
        추가하기
      </button>
    </form>
  );
};

const formStyle = css`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #ffffff;
  gap: 10px;
`;

const inputStyle = css`
  height: 45px;
  width: 250px;
  border-radius: 4px;
`;

const submitBtnStyle = css`
  border-radius: 4px;
  height: 45px;
  color: #ffffff;
  width: 90px;
  background-color: #9297bf;
`;

export default WriteForm;
