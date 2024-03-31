import { useState, useEffect } from "react";
import styled from "styled-components";
import Contenedor from "../../styled-components/centralizar";

const Items = styled(Contenedor)`
  display: flex;
  flex-direction: row;
  margin: 12px 12px 12px 0;
  background-color: #e4e4e4;
  padding: 0 7px;
  border: none;
  border-radius: 6px;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 15px;
  line-height: 2rem;
  font-weight: 520;
  ${(props) =>
    props.isActive
      ? `background-color: #030303; color: #fff;`
      : `  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }`}
`;

const TabList_item = ( prompts ) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(prompts.activar);
  }, [prompts.activar]);

  return <Items isActive={isActive}>{prompts.text}</Items>;
};

export default TabList_item;
