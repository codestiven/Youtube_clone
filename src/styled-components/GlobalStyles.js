// App.js (o tu archivo principal)

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Estilos globales */
* {



  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    
}

body {
    width: 100%;
    height: 100vh;
    padding: 1px;
  scrollbar-width: thin; /* Para navegadores basados en Firefox */
  overflow-y: scroll; 

}




/* Para navegadores basados en WebKit (como Chrome y Safari) */
body::-webkit-scrollbar {
  width: 0.5rem; /* Puedes ajustar el ancho según tus preferencias */
}

body::-webkit-scrollbar-thumb {
  background-color: #888; /* Color de la barra de desplazamiento */
}


  /* Otros estilos */
`;

export default GlobalStyles;
