import React from 'react'
import {addDoc,collection} from "firebase/firestore"
import {DB} from "../firebase/firebaseConfig"



function Principal3() {

  const url= 'https://rickandmortyapi.com/api/character/'

  const cargarApi = async (url) => {
    const resp =await fetch (url)
    const data = await resp.json()
    // sendFirebase()
    
  }
  cargarApi(url)
  const sendFirebase=(data)=>{
        data.forEach( card => {
            const {id,name,image,episode,status}=card
            
            const cargarDatos ={
                idApi: id,
                name: name,
                image: image,
                episode:episode,
                status: status,
            }


            addDoc(collection(DB,"rickandmorty"),cargarDatos)
           .then(resp => console.log("Datos agregados"))
           .catch(error => console.warn(error))
        })
  }
  


  return (
    <div>
        <h1>api</h1>
    </div>
  )
}

export default Principal3;