import React from 'react'
import styled,{createGlobalStyle} from 'styled-components';
import { NavLink } from "react-router-dom";

function Principal2() {
 
  const GlobalStyle=createGlobalStyle`

  *{
    margin:0;
    padding:0;
  }
  body{
    display:flex;
    color: white;
    background-color:RGB(11,6,34);
  }
  `;
  const Img1=styled.img`
  display:flex;
  width:200px;
  height:200px;
  margin-left:100px;
  margin-top:60px;
  `;




  return (
    
    <div className="mt-5 ms-2">
        <GlobalStyle/>
      <div className="mb-5">
        <label className="form-label">Como deseas que te llamemos?</label>
        <input
          type="text"
          className="form-control "
          placeholder="Dame esta informacion para proceder"
          required
        />
      </div>
      <div className="mb-5">
        <label className="form-label">Cual es tu genero? (no es tan necesario que la respondas).</label>
        <input
          type="text"
          className="form-control"
          placeholder="Aqui te valoramos por lo que eres....."
        />
      </div>
      <div className="mb-5">
        <label className="form-label">Cual es tu peso? (es para darte un plan mas efectivo).</label>
        <input
          type="number"
          className="form-control"
          placeholder="Dame esta informacion para proceder"
          required
        />
      </div>
      <div className="mb-5">
        <label className="form-label">Cual es tu altura?:</label>
        <input
          type="number"
          className="form-control"
          placeholder="Dame esta informacion para proceder"
          required
        />
      </div>
      <Img1 src='https://res.cloudinary.com/dcdmk6vze/image/upload/c_thumb,w_200,g_face/v1655767138/imagenes%20proyecto/logopag4_yj5l6m.jpg'/>
      <NavLink to="/PaginaPrincipal">
      <button className="btn btn-primary mt-5 form-control">
            Dale Para Avanzar en tu Aventura
        </button>
        </NavLink>
    </div>
    
   
  );
}

export default Principal2