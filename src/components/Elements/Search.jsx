// import React from 'react'
import styled , {css} from 'styled-components'
import Contenedor from '../../styled-components/centralizar';
import Assets from '../../assets/Assets';
import Icon from '../Elements/Icon';





const border = css`
  border-top: 1px solid #d3d3d3;
border-right: 1px solid #d3d3d3;
border-bottom: 1px solid #d3d3d3;


  cursor: pointer;

  margin: 0;
`;


const Div = styled(Contenedor)`
  width: 100%;
  height: 40px;
  padding: 0 0 0 10px;

  @media (max-width: 600px) {
    visibility: hidden;
  }

  border-radius: 40px 0 0 40px;
  ${border}
  border-left: 1px solid #d3d3d3;
  background-color: #fff;

  & div {
    visibility: hidden;
    position: absolute;
  }
  & input {
    width: 100%;
    height: 80%;

    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;

    width: 100%;
    height: 80%;

    background-color: transparent;
    border: none;
    box-shadow: none;
    color: inherit;
    font-family: "Noto Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-left: 4px;
    max-width: 100%;
    outline: none;
    text-align: inherit;

    color: #111111;
    flex: 1;
  }
  & input[type="text" i] {
    padding-block: 1px;
    padding-inline: 2px;
  }

  &:focus-within {
    border-color: blue;
    padding: 0 0 0 0;

    & div {
      visibility: visible;
      position: relative;
    }
  }

  & input:focus {
    & div {
      display: block;
      background-color: red;
    }
  }
`;

const Div2 = styled(Contenedor)`
  width: 10%;
  height: 40px;

  border-radius: 0 40px 40px 0;
  padding: 0 20px 0 16px;

  ${border}
  background-color: #f8f8f8;

  @media (max-width: 600px) {
    background: transparent;
    border: none;
  }
`;





export default function Search() {
  return (
    <>
      <Div>
        <div>
          <Icon img={Assets.buscar} hover={false}  />
        </div>

        <input type="text" placeholder="Buscar" />
      </Div>
      <Div2>
        <Icon img={Assets.buscar} hover={false}  />
      </Div2>
    </>
  );
}
