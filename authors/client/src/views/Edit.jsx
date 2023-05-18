import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import CreateForm from '../components/CreateForm';

const UpdatePage = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                const author = response.data
                setName(author.name);
            })
            .catch(error => console.log(error))
    }, [id])

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                navigate(`/`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {name &&<CreateForm method="patch" name={name} action={`/authors/${id}`}/>}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default UpdatePage;