import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Item_nav from "../Elements/Item_nav";
import Assets from "../../assets/Assets";

const breakpoint = 1300;

const Principal = styled.nav`
  /* background-color: blue; */
  width: 250px;
  margin-right: 0.5%;
  padding: 10px;
  overflow: auto;
  height: 92.4vh;
`;

export default function Nav() {
  const [size, setSize] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {size ? (
        <div>
          <p>Hola Mundo</p>
        </div>
      ) : (
        <Principal>
          <Item_nav
            activar={true}
            icono={Assets.home_active}
            text="Principal"
          />
          <Item_nav icono={Assets.shorts} text="Shorts" />
          <Item_nav icono={Assets.Sub} text="Subcripciones" />
          <hr
            style={{
              margin: "15px 0",
              border: "none",
              borderBottom: "0.1px solid #d8d8d8",
            }}
          />

          <Item_nav icono={Assets.home_active} text="Principal" />
          <Item_nav icono={Assets.shorts} text="Shorts" />
          <Item_nav icono={Assets.Sub} text="Subcripciones" />
          <Item_nav icono={Assets.home_active} text="Principal" />
          <Item_nav icono={Assets.shorts} text="Shorts" />
          <Item_nav icono={Assets.Sub} text="Subcripciones" />
          <Item_nav icono={Assets.Sub} text="Subcripciones" />

          <hr
            style={{
              margin: "15px 0",
              border: "none",
              borderBottom: "0.1px solid #d8d8d8",
            }}
          />
        </Principal>
      )}
    </>
  );
}
