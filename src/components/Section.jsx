// import React from 'react'
import styled from "styled-components"
import Nav from "./Section/Nav";
import Main from "./Section/Main";

const Seccion = styled.section`
  display: flex;
  flex-direction: row;
`;


export default function Section() {
  return (
    <Seccion>
        <Nav/>
        <Main/>
    </Seccion>
  )
}
