// import React from "react";
import Assets from "../assets/Assets";
import Icon from "./Elements/Icon";
import LogoT from "./Elements/logoT";
import styled , {css} from "styled-components";
import User from "./Elements/user";
import Contenedor from "../styled-components/centralizar";
import Search from "./Elements/Search";


const ref = css`
  border: solid 5px red;
`;

const general = css`
  display: flex;

`;

const lados = css`
  width: 200px;
`;



const Navegacion = styled.nav`
  width: 100%;
  height: 56px;


  display: flex;
  justify-content: space-between;
`;

const Start = styled.div`

  padding: 0px 15px 0px 12px;

  ${general}
  /* ${ref} */
`;

const Center = styled(Contenedor)`
  ${general}
  ${lados}

  width: 40%;

  justify-content: space-between;
`;

const End = styled(Contenedor)`
  ${general}
  ${lados}



    display: flex;
  justify-content: space-between;
  padding: 0px 50px 0px 15px;
`;


const Micro = styled.div`
margin-left: 25px;
`;


export default function Nav() {
  return (
    <Navegacion>
      <Start>
        <Contenedor>
          <Icon img={Assets.Menu} />
        </Contenedor>

        <LogoT />
      </Start>

      <Center>
        <Search />

        <Micro>
          <Icon img={Assets.Micro} fondo={true}></Icon>
        </Micro>
      </Center>

      <End>
        <Icon img={Assets.Add_video}></Icon>
        <Icon img={Assets.Campana}></Icon>
        <User img="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
      </End>
    </Navegacion>
  );
}
