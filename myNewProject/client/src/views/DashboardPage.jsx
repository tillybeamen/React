import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateForm from '../components/CreateForm';


const DashboardPage = () => {
    const [prodList, setProdList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(response => {
                setProdList(response.data)
            })
            .catch(err => console.log(err))
    }, [])
    
    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(response => {
                removeFromDom(deleteId)
            })
            .catch(err => console.log(err))
        }
    

    const removeFromDom = (deleteId)=>{
        const filteredList = prodList.filter((eachProd) =>
        eachProd._id !== deleteId);
        setProdList(filteredList);
    }

    const addToDom = (newProd, e) =>{
        setProdList([...prodList, newProd])
    }



    return (
        <div >
            <CreateForm onCreate = {addToDom}/>
            <h1>All Products:</h1>
            <table >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        prodList.map((eachProd, idx)=>(
                            <tr key={idx}>
                                <td><Link to={`/products/${eachProd._id}`}>
                                    {eachProd.title}</Link></td>
                                <td>${eachProd.price}</td>
                                <td>{eachProd.description}</td>
                                <td>
                                    <button><Link to={`/products/${eachProd._id}/edit`}>
                                    Edit</Link></button>
                                </td>
                                <td>
                                    <button onClick={()=>handleDelete(eachProd._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DashboardPage;