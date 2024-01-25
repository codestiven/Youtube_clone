
import Assets from "../../assets/Assets";
import styled from "styled-components";
import Contenedor from "../../styled-components/centralizar";

const LogoObject = styled.object`
  width: 120px;
  padding: 18px 14px 18px 16px;
`;

export default function LogoT() {
  return (
    <>
      <Contenedor>
        {/* Cambiar de Logo a LogoObject */}
        <LogoObject type="image/svg+xml" data={Assets.LogoT}>
          Tu navegador no admite la carga de archivos SVG.
        </LogoObject>
      </Contenedor>
    </>
  );
}
