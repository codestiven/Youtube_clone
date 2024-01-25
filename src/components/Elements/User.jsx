
import styled from 'styled-components'
import Contenedor from '../../styled-components/centralizar';


const Img = styled.img`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  border-radius: 100%;



`;



export default function User_img(prompt) {
  return (
    <Contenedor>
      <Img src={prompt.img} alt="" />
    </Contenedor>
  );
}
