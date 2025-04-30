import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) =>
    props.theme === "primary" ? "none" : "1px solid #ffffff"};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)"
      : "transparent"};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    color: rgb(255, 255, 255);
    background-color: ${(props) =>
      props.theme === "primary" ? "#ffffff" : "rgb(84, 32, 255)"};
  }

  &:active {
    opacity: ${(props) => (props.theme === "primary" ? "0.5" : "0.8")};
  }
`;
