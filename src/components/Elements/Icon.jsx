import styled from 'styled-components'
import Contenedor from '../../styled-components/centralizar';
import { useState } from 'react';
import { css } from 'styled-components';




const Img = styled.img`
  width: 42px;
  height: 42px;

  padding: 10px;




`;

const Contenedor_hijo = styled(Contenedor)`
  border-radius: 100%;
  width: 42px;
  height: 42px;
  background-color: transparent;

  ${(props) =>
    props.hover &&
    css`
      &:hover {
        cursor: pointer;
        background-color: #e6e6e6;
      }
    `}

  ${(props) =>
    props.fondo &&
    css`
      cursor: pointer;
      background-color: #f1f1f1;

      &:hover {
        cursor: pointer;
        background-color: #bdbdbd;
      }
    `}
`;

export default function Icon(prompt) {

    
    const hovered = prompt.hover !== undefined ? prompt.hover : true;
    const fondo = prompt.fondo !== undefined ? prompt.fondo : false;


  return (
    <Contenedor_hijo hover={hovered} fondo={fondo}>
      <Img src={prompt.img} alt="" />
      {hovered}
    </Contenedor_hijo>
  );
}
