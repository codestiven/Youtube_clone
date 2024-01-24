// import React from 'react'
import styled from 'styled-components'
import Item_nav from '../Elements/Item_nav';
import Assets from '../../assets/Assets'







const Principal = styled.nav`
  /* background-color: blue; */
  width: 250px;

  margin-right: 0.5%;
  padding: 10px;
  overflow: auto;
  height: 92.4vh;
`;



export default function Nav() {
  return (
    <Principal>
      <Item_nav icono={Assets.home} text="Principal" />
      <Item_nav icono={Assets.shorts} text="Shorts" />
      <Item_nav icono={Assets.Sub} text="Subcripciones"/>
      
      
    </Principal>
  );
}


