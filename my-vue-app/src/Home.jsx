import React from "react"
import { Link } from "react-router-dom"
import Form from "./Form"
import axios from 'axios'
import { useState, useEffect } from "react"
export default function Home() {
    const [payload1, setpayload1] = useState()

    useEffect(() => {
        data()
    }, [])



    const data = async () => {
        let a = await axios.get("https://bootcamp.todo.arhamsoft.org/client/todo/list?userId=28314")
        // .then(res=> console.log(res)).catch((err)=> console.log(err))
        // console.log(a.data.todos);   
        // console.log(a.data.todos);
        setpayload1(a.data.todos)
        // console.log("play", payload1);
        // console.log("yahooo")
        // console.log(payload1);

    }

    const deleteUser = async (id) => {
        // console.log('click');
        const apiUrl = `https://bootcamp.todo.arhamsoft.org/client/todo/delete/${id}`;
        await axios.delete(apiUrl);
        data();
    }
    return (
        <>
            <div className="container text-center">
                <h1 className="text-info mt-5">Home Page</h1>
                <p>Click the button below to fill the details</p>
                <Link className="btn btn-primary px-3" to="/Form">Form</Link>
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>title</th>
                            <th>Description</th>
                            <th>Delete</th>
                            <th>Edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {payload1?.map(item => {
                            // console.log(item);
                            return (
                                <tr key={item._id}>
                                    <td>{item.userId}</td>
                                    <td>{item.title}</td>
                                    <td>{item.desc}</td>
                                    <td><button className="btn btn-danger" onClick={() => deleteUser(item._id)}>delete</button></td>
                                    {/* <td><Link to={{pathname: "/Update",state:{userid:"sohaib"} }} >Update</Link></td> */}
                                    <td><Link className="btn btn-info" to="/Update" state={{ userId: item.userId, id: item._id, title: item.title, desc: item.desc }}>Update</Link></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
                {/* <h1>`yahoo {payload1}`</h1> */}
            </div>
        </>
    )
}