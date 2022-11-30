import React from "react"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Home from "./Home"
// import {Link} from "react-router-dom"
export default function Form(){
    const navigate=useNavigate()
    const [payload,setPayload]=useState({userId:"28314",title:"",desc:""})
    function formvalue(event){
        const {name,value}=event.target
        setPayload(previousvalue=>{
            return{
                ...previousvalue,
                [name]:value
            }
           
        })

    }
    const submitvalue= async (event)=>{
        event.preventDefault()
        axios.post('https://bootcamp.todo.arhamsoft.org/client/todo/create', payload)
    

        navigate("/Home")
    

    }

    return(
        <>

        <div className="container mt-5">
        <h2 className="text-center mb-4">Fill Out the below details</h2>
        <form className="form w-50 mx-auto" action="">
            <label className="form-label" htmlFor="fname">ID:</label>
            <input className="form-control mb-3" type="text" id="fname" value="28314" disabled />
            <label className="form-label" htmlFor="title">Title:</label><br></br>
            <input className="form-control mb-3" type="text" id="title" value={payload.payload} name="title" onChange={formvalue} />
            <label className="form-label" htmlFor="description">Description:</label>
            <input className="form-control mb-3" type="text" id="description" value={payload.desc} name="desc" onChange={formvalue} /> 
            <input className="btn btn-success" type="submit" value="Submit" onClick={submitvalue} />
        </form>
       </div>
      
       </>
    )
}