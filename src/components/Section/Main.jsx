// import React from 'react'
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

  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }
`;

const Index = styled.main`
  background-color: red;
  width: 100%;
`;

const TabList = styled(Contenedor)`
  justify-content: flex-start;
  background-color: green;
  width: 100%;
  display: flex;
  height: 56px;
  padding: 0 30px;
`;











const TabList_item = (prompts) => {
  return <Items> {prompts.text} </Items>;
};

export default function Main() {
  return (
    <Index>
      <TabList>
        <TabList_item text="Principal" />
        <TabList_item text="Principal" />
        <TabList_item text="Principal" />
        <TabList_item text="Principal" />
      </TabList>
    </Index>
  );
}
