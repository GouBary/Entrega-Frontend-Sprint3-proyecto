import React from 'react'
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from "yup"
import { useDispatch } from 'react-redux';
import { searchEjercisioASync } from '../redux/actions/actionEjercisios';



export default function Search() {

    const dispatch=useDispatch()
  
    const formik =useFormik({
        initialValues:{
            search: ""
        },
        validationSchema:Yup.object({
            search: Yup.string().required("Que quieres entrenar hoy")
        }),
        onsubmit: ({search})=>{
            console.log(search)
            dispatch(searchEjercisioASync(search))
        }
    })


  return (
    <div>
        <center>
            <form onSubmit={formik.handleSubmit}>
            <input placeholder='search' name='search' onChange={formik.handleChange}/>
            <Button variant="contained" color="success" type="submit" style={{ margin: "2%" }}>
                Guardar
            </Button>
            
            </form>
        </center>
    </div>
  )
}
