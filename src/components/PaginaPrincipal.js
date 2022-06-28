import React from 'react'
import styled,{createGlobalStyle}from "styled-components"
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { listaEjercisiosASync } from '../redux/actions/actionEjercisios';


export default function PaginaPrincipal() {

  const dispatch=useDispatch()
  const{Ejercisio}=useSelector(store => store.Ejercisios)


  const GlobalStyle= createGlobalStyle`
  *{
     margin:0;
     padding:0;
  }
  body{
     display:flex;
     background-color: RGB(31,35,62);
    
     
  }
  `;
  const Img1 =styled.img`
  width:450px;
  height:250px;
  `;


React.useEffect(()=>{
dispatch(listaEjercisiosASync())
},[])




  return(
    <div>
      <GlobalStyle/>
      <div className="col-md-8">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
             <NavLink to="/AgregarEjercisio">
             <Img1 src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1656390205/imagenes%20proyecto/menu%20de%20entrada/cf76c513-b376-42b6-9806-e00421f2036e_zeaevu.jpg" />
              </NavLink>
            </div>
            <div className="carousel-item">
            <Img1  src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1656299645/imagenes%20proyecto/menu%20de%20entrada/1_fmecum.jpg" />
            </div>
            <div className="carousel-item">
              <Img1 src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1656299646/imagenes%20proyecto/menu%20de%20entrada/5_mc1hv4.jpg" />
            </div>
            <div className="carousel-item">
              <Img1 src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1656299646/imagenes%20proyecto/menu%20de%20entrada/6_rsx4pj.jpg" />
            </div>
            <div className="carousel-item">
              <Img1 src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1656299647/imagenes%20proyecto/menu%20de%20entrada/3_xe41zh.jpg" />
            </div>
            <div className="carousel-item">
              <Img1 src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1656299647/imagenes%20proyecto/menu%20de%20entrada/2_eghwj2.jpg" />
            </div>
            <div className="carousel-item">
              <Img1 src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1656299658/imagenes%20proyecto/menu%20de%20entrada/4_cz8zdq.jpg" />
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
       {
            Ejercisio.map((p,index)=>(
              <div key={index}>
                 <div className="card mb-2 w-1  m-5">
  <img src={p.imagen} className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{p.nombre}</h5>
    <p className="card-text">{p.descripcion}</p>
  </div>
   </div>
              </div>
            ))


       }

      {/* <div className="card mb-2 w-1  m-5">
  <img src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1656299645/imagenes%20proyecto/menu%20de%20entrada/1_fmecum.jpg" className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
   </div> */}
     
    </div>
  );
}

 

