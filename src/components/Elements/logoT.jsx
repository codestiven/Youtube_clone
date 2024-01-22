
import Assets from '../../assets/Assets'
import styled from 'styled-components'
import Contenedor from '../../styled-components/centralizar';





const Logo = styled.img`
  width: 120px;
  height: 36px;
`;



export default function LogoT() {
  return (
    <>
      <Contenedor>
        <Logo src={Assets.LogoT} alt="" />
      </Contenedor>
    </>
  );
}
