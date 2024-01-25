// import React from 'react'
import styled from "styled-components";
import Contenedor from "../../styled-components/centralizar";
import User_img from "./User";

const Item = styled.div`
  width: 100%;
`;

const Visualizacion = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  height: 60%;
  position: relative;
  text-decoration: none;

  & img {
    border-radius: 13px;
    transition: all 0.1s;
    

  }

  &:hover {
    cursor: pointer;
    & img {
      border-radius: 0px;
    }
  }

  margin-bottom: 5px;
`;
const Con = styled(Contenedor)`
  width: 100%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Time = styled.div`
  position: absolute;
  bottom: 0; /* Coloca el elemento en la esquina inferior */
  right: 0;
  z-index: 1;
  font-size: 12px;
  font-weight: bold;
  padding: 4px;
  background: #363636;
  color: #fff;
  border-radius: 4px;
  margin: 10px;
`;

const Datos = styled.div`
  position: relative;
  display: flex;
`;

const User = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 20%;
`;

const Textos = styled.div`
  width: 100%;
`;

const Titulos = styled.div`
  color: #0f0f0f;
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 18px;
  line-height: 2.2rem;
  font-weight: 500;
  overflow: hidden;
  display: block;
  max-height: 4.4rem;
  -webkit-line-clamp: 2;
  display: box;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  /* white-space: normal;
  margin-bottom: 10px; */
`;

export default function Video_items() {
  return (
    <Item>
      <Visualizacion href="https://www.youtube.com/watch?v=9bZqp7i544w">
        <Con>
          <img src="https://i.ytimg.com/vi/9bZqp7i544w/hqdefault.jpg" alt="" />
        </Con>
        <Time>2:30</Time>
      </Visualizacion>
      <Datos>
        <User>
          <User_img img="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
        </User>

        <Textos>
          <Titulos>El mejor canal de youtube</Titulos>

          <p>Canal de prueva</p>

          <p>10 K Vistas • 2 meses</p>
        </Textos>
      </Datos>
    </Item>
  );
}
