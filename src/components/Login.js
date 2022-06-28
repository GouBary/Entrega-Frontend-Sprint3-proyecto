import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled,{createGlobalStyle} from "styled-components";
import app from "../firebase/firebaseConfig"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
const auth = getAuth(app)


export function Login() {

 const GlobalStyle= createGlobalStyle`
 *{
    margin:0;
    padding:0;
 }
 body{
    display:flex;
    background-color: RGB(32,33,36);
    
 }
 `;
 const Img1 =styled.img`
 width:400px;
 height:250px;
 `;
 const Div1=styled.div`
 color:white;
 `;

 const [registro,setregistro]=useState(false)

 const handlerSubmit = async(e) =>{
  e.preventDefault()
  const correo = e.target.email.value;
  const contraseña = e.target.contraseña.value;
 

  if(registro){
    await createUserWithEmailAndPassword(auth,correo,contraseña)
  }
  else{
    await signInWithEmailAndPassword(auth,correo,contraseña)
  }
 }



  return (
    <Div1 className="row container p-4">
      <GlobalStyle/>
      <div className="col-md-8">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Img1  src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1655767139/imagenes%20proyecto/musculoso7_yqp01w.jpg" />
            </div>
            <div className="carousel-item">
              <Img1 src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1655767139/imagenes%20proyecto/musculoso6_sj1myq.jpg" />
            </div>
            <div className="carousel-item">
              <Img1 src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1655767138/imagenes%20proyecto/musculoso1_snppd1.jpg" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* en esta seccion el formulario */}
      <div className="col-md-4"></div>
      <div className="mt-5 ms-2">
        <h1>{registro ? "registrate" :"inicia sesion"}</h1>
        <form onSubmit={handlerSubmit}>
            <div className="mb-3">
                <label className="form-label">Direccion De Email:</label>
                <input type="email" className="form-control" placeholder="ingresar email" id="email" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Contraseña:</label>
                <input type="password" className="form-control" placeholder="ingresar contraseña" id="contraseña" required/>
            </div>
            <div>
            {registro ? <div className="mb-3">
            <label className="form-label mb-3">Nombre:</label>
            <input type="text" className="form-control mb-3" placeholder="Nombres Completos" id="" required />
            <label className="form-label mb-3">Apellido:</label>
            <input type="text" className="form-control mb-3" placeholder="Apellidos Completos" id="" required />
            <label className="form-label mb-3">Edad:</label>
            <input type="text" className="form-control mb-3" placeholder="Registra tu edad" id="" required />
            </div> : ""
            }            

            </div>
            <NavLink to="/Principal2">
            <button className="btn btn-primary" type="submit">
                {registro ? "registrate" : "inicia sesion"}
            </button>
            </NavLink>
            </form>

           

     <div className="form-group">
        <button className="btn btn-secondary mt-4 form-control" onClick={()=>setregistro(!registro)}>
            {registro ? "ya tienes una cuenta? inicia sesion":"no tienes cuenta? registrate"}
        </button>
     </div>
      </div>
    </Div1>
  );
}
