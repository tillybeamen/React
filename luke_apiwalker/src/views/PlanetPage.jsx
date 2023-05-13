import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PlanetPage = () => {
    const { id } = useParams();
    const [planets, setPlanets] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data)
                setPlanets(response.data)
            })
            .catch(error => {
                setPlanets(null)
            })
    }, [id])

    return (
        <div>
            {
                planets ?
                    <div>
                        <h1>{planets.name}</h1>
                        <ul style={{ listStyle: "none" }}>
                            <li>Climate: {planets.climate}</li>
                            <li>Terrain: {planets.terrain}</li>
                            <li>Surface Water: {planets.surface_water}</li>
                            <li>Population: {planets.population}</li>
                        </ul>
                    </div> :
                    <div>
                        <h1>These are not the droids you're looking for</h1>
                    </div>
            }
        </div>

    );
}

export default PlanetPage