import { useState , useEffect } from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Item = styled.div`
  width: 100%;
  /* background-color: #a52222; */
  padding: 0 12px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 1px;

  & img {
    margin-right: 18px;
  }

  & p {
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 14px;
    line-height: 2rem;
    font-weight: 500;
    color: #0f0f0f;
  }

  ${(props) => props.isActive && `background-color: #eeeeee;`}

  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;

export default function Item_nav( prompt ) {
  const [isActive, setIsActive] = useState(false);

  // Update isActive state when prompt.activar changes
  useEffect(() => {
    setIsActive(prompt.activar);
  }, [prompt.activar]);

  return (
    <Item isActive={isActive}>
      <Icon img={prompt.icono} hover={false} />
      <p>{prompt.text}</p>
    </Item>
  );
}
