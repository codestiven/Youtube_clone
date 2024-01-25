// import React from 'react'
import styled from "styled-components";
import Contenedor from "../../styled-components/centralizar";
import Video_items from "../Elements/Video_items";
import TabList_item from "../Elements/TabList_item";



const Index = styled.main`
  /* background-color: red; */
  width: 100%;
`;

const TabList = styled(Contenedor)`
  justify-content: flex-start;
  /* background-color: green; */
  width: 100%;
  display: flex;
  height: 56px;

`;



const Contenido = styled.div`
  width: 100%;
  height: 85vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 32px;
  justify-content: space-between;
  padding: 32px 0px;
  overflow-y: scroll;
  
`;










export default function Main() {



  
  return (
    <Index>
      <TabList>
        <TabList_item text="Principal" />
        <TabList_item text="Principal" />
        <TabList_item text="Principal" />
        <TabList_item text="Principal" />
      </TabList>
      <Contenido>
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
        <Video_items />
      </Contenido>
    </Index>
  );
}
