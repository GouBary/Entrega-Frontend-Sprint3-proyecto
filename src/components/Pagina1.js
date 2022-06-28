import React from 'react'
import styled, {createGlobalStyle} from 'styled-components';
import { NavLink } from 'react-router-dom';



export function Pagina1 () {
  const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: RGB(253,247,1);
  } 
    
    
    
    `;

  const Img1=styled.img`
    width: 80vw;
    height: 80vw;
    margin-left: 10vw;
    margin-top: 50vw;
  `;



  return (
    
    <React.Fragment>
    <GlobalStyle/>
    <NavLink to="/pag2">
    <Img1 src='https://res.cloudinary.com/dcdmk6vze/image/upload/v1655767138/imagenes%20proyecto/logopag2_kfxmnk.jpg'/>
    </NavLink>
    </React.Fragment>
  )
}
