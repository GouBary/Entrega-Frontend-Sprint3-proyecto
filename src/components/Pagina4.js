import React from 'react'
import styled, {createGlobalStyle} from 'styled-components';
import { NavLink } from 'react-router-dom';



export function Pagina4 () {
  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mr+Dafoe&family=Oleo+Script+Swash+Caps:wght@700&family=Poppins:wght@200;300&family=Raleway:ital,wght@1,200&display=swap');

  *{
    margin: 0;
    padding: 0;
  }
  
  body {
    display: flex;
  } 
`;

const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>; 

  const Img1=styled.img`
    width: 75vw;
    height: 75vw;
    margin-left: 15vw;
    margin-top: 30vw;
  `;
  const Img2=styled.img`
  display: flex;
  width: 70px;
  margin-left: 42vw;
  margin-top: 19vw;
`;

const Txt1=styled.div`
font-family: 'Poppins', sans-serif;
text-align: center;
font-size: 24px;
margin-top: 5vw;
font-weight: italic;
color: RGB(30,26,23);
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
   <Img1 src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655772422/imagenes%20proyecto/logo3_l6zxgv.webp'/>
    <Txt1>
    <Txt2>Character</Txt2>
    <p>¡Esta app te proporciona todo lo que necesitaras, pero el desempeño y la disciplina, la pones tú así que vamos con toda!!</p>
    </Txt1>
   
     <Img2 src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1654895611/iamgenes%20de%20proyecto%2002/barritainicio/3_qceryh.jpg'/> 
     <NavLink to="/Login">
     <Boton1>Next</Boton1>
     </NavLink>
    </React.Fragment>
    
  )
}
