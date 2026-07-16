import { css } from "@emotion/css";

export const todoListStyle = css`
  max-width: 100%;
  font-family: sans-serif;
  margin: 100px;

  .Head3 {
    font-family: $font;
    font-weight: bold;
    font-size: 50px;
  }

  input {
    width: 100%;
    border: 2px solid black;
    font-size: 16px;
    font-family: sans-serif;
    padding: 12px;
  }

  button {
    border-radius: 5px;
    height: 40px;
    width: 100%;
    font-size: 16px;
  }

  .btnAddTask {
    background-color: green;
    color: white;
  }

  ul {
  }

  li {
    font-size: 16px;
  }

  .btnDelete {
    background-color: red;
    color: white;
  }
`;
