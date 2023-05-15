import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailsPage = () => {
    const [product, setProduct] = useState();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(error => console.log(error))
    }, [id])

    return (
        <div>
            {
                product ?
                    <div>
                        <h3>{product.title}</h3>
                        <p>
                            Price: ${product.price}
                        </p>
                        <p>
                            Description: {product.description}
                        </p>
                        <p>
                            <Link to={`/products/${id}/edit`}>Edit</Link></p>
                    </div> :
                    <h1>Product Not available</h1>
            }
        </div>
    )
}

export default DetailsPage