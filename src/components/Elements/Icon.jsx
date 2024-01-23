import styled from "styled-components";
import Contenedor from "../../styled-components/centralizar";
import { css } from "styled-components";

const Flotante = styled.div`
  position: absolute;
  top: 60px; /* Ajusta la distancia según tus necesidades */
  left: -10px;
  z-index: 999;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-size: 13px;
  background-color: #363636b7;

  transition: opacity 500ms; /* Transición en la propiedad opacity */
  opacity: 0;
  display: ${(props) => (props.mostrar ? "block" : "none")};
`;

const Img = styled.img`
  width: 42px;
  height: 42px;
  padding: 10px;
`;

const Contenedor_hijo = styled(Contenedor)`
  position: relative;
  border-radius: 100%;
  width: 42px;
  height: 42px;
  background-color: transparent;

  &:hover {
    ${Flotante} {
      opacity: 1;
    }
  }

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
      <Flotante mostrar={hovered}>
        {" "}
        <p>{prompt.texto}</p>{" "}
      </Flotante>
    </Contenedor_hijo>
  );
}
