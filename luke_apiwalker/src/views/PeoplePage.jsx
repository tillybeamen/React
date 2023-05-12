import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PeoplePage = () => {
  const { id } = useParams();
  const [people, setPeople] = useState(1)
  const error = false

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
      .then(response => {
        console.log(response.data);
        setPeople(response.data);
      })
      .catch(error => {
        setPeople(null)
      })
  }, [id])

  return (
    <div>
      {
        people ?
          <div>
            <h1>{people.name}</h1>
            <ul style={{ listStyle: "none" }}>
              <li>Height: {people.height}</li>
              <li>Mass: {people.mass}</li>
              <li>Hair Color: {people.hair_color}</li>
              <li>Skin Color: {people.skin_color}</li>
            </ul>
            </div> :
            <div>
              <h1>These are not the droids you're looking for</h1>
            </div>
      }
    </div>

  )
}

export default PeoplePage