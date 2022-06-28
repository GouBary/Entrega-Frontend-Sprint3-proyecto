import React,{useState} from 'react';
import {Login} from "./Login"
import Principal2 from './Principal2';
import app from '../firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(app)



export default function PaginaVerificacion ()  {

  const [usuario,setusuario]=useState(null)

  onAuthStateChanged(auth,(usuarioFirebase) => {
    if(usuarioFirebase){
      setusuario(usuarioFirebase)
    }
    else{
      setusuario(null)
    }
  })

  return (
    <div>
         {usuario ? <Principal2 correoUsuario = {usuario.email}/> : <Login/>}
   </div>
  );
}