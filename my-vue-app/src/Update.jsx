import React from "react"
import { useState } from "react"
import axios from 'axios'
// import { useNavigate } from "react-router-dom"
import Home from "./Home"
import {Link, useLocation, useNavigate} from "react-router-dom"
export default function Form(){
    const location = useLocation();
    console.log(location);
    const{userId,title,desc,id}=location.state
    console.log(userId,title,desc,id)
    // console.log("ye new",pro);
    const navigate=useNavigate()
    const [payload,setPayload]=useState({userId:userId,title:title,desc:desc})

    
    
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
        axios.put(`https://bootcamp.todo.arhamsoft.org/client/todo/edit/${id}`, payload)
    

        navigate("/Home")
    

    }

    return(
        <>
       <form action="">
        <label htmlFor="fname">ID:</label><br></br>
        <input type="text" id="fname" value="28314" disabled />
        <label htmlFor="title">Title:</label><br></br>
        <input type="text" id="title" value={payload.title} name="title" onChange={formvalue} />
        <label htmlFor="description">Description:</label><br></br>
        <input type="text" id="description" value={payload.desc} name="desc" onChange={formvalue} /> <br /><br />
        <input type="submit" value="Submit" onClick={submitvalue} />
       </form>
      <h1>{payload.title}</h1>
       </>
    )
}