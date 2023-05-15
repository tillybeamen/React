import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/products`, { title: title, price: price, description: description })
            .then(response => {
                props.onCreate(response.data)
            })
            .catch(error => console.log(error))
    }



    return (
        <form onSubmit={handleSubmit} >
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
    )
}
export default CreateForm