import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdatePage = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                const product = response.data
                setTitle(product.title);
                setPrice(product.price);
                setDescription(product.description);
            })
            .catch(error => console.log(error))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, { title, price, description })
            .then(response => {
                navigate(`/products/${id}`)
            })
            .catch(error => console.log(error))
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                navigate(`/dashboard`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" id="" value={title} onChange={e => setTitle(e.target.value)} />
                    <label>Price</label>
                    <input type="number" name="price" id="" value={price} onChange={e => setPrice(e.target.value)} />
                    <label>Description</label>
                    <input type="text" name="description" id="" value={description} onChange={e => setDescription(e.target.value)} />
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default UpdatePage;