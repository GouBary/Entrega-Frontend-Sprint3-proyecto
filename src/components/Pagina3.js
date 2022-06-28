import React from 'react'
import styled, {createGlobalStyle} from 'styled-components';
import { NavLink } from 'react-router-dom';



export function Pagina3 () {
  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mr+Dafoe&family=Oleo+Script+Swash+Caps:wght@700&family=Poppins:wght@200;300&family=Raleway:ital,wght@1,200&display=swap');

  *{
    margin: 0;
    padding: 0;
  }
  
  body {
    display: flex;
    background-color: RGB(245,245,245);
  } 
`;

const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>; 

  const Img1=styled.img`
    width: 65vw;
    height: 65vw;
    margin-left: 20vw;
    margin-top: 50vw;
  `;
  const Img2=styled.img`
  display: flex;
  width: 70px;
  margin-left: 42vw;
  margin-top: 14vw;
`;

const Txt1=styled.div`
font-family: 'Poppins', sans-serif;
text-align: center;
font-size: 17px;
margin-top: 15vw;
color: RGB(69,69,69);
`;
const Txt2=styled.p`
margin:20px;
font-size: 38px;
font-family: 'Poppins', sans-serif;
color: RGB(235,235,10);
`;

const Boton1=styled.button`
background-color: yellow;
width: 400px;
height: 40px;
margin-left: 15px;
margin-top: 10px;
border-radius: 30px;
border: none;
font-size: 1.2rem;
color: RGB(69,69,69);
`;


  return (
    
    <React.Fragment>
    <GlobalStyle/>
    <NavLink to="/pag3">
    <Img1 src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655776045/imagenes%20proyecto/logo2rrrrr_chwbrm.jpg'/>
    </NavLink>
    <Txt1>
    <Txt2>Discipline</Txt2>
    <p>Esta app consideró esta opción como uno de los problemas más conflictivos a la hora de entrenar, así que con nosotros estarás seguro de mejorar.</p>
    </Txt1>
   
     <Img2 src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1654895611/iamgenes%20de%20proyecto%2002/barritainicio/2_fwsedi.jpg'/> 
     <NavLink to="/pag4">
     <Boton1>Next</Boton1>
     </NavLink>
    </React.Fragment>
    
  )
}
