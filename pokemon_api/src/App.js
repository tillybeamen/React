
import './App.css';
import axios from 'axios';
import {useState} from 'react'

function App() {
  const [pokemon, setPokemon] = useState([]);

  const showPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0').then(response => {
      setPokemon(response.data.results);
      console.log(response.data.results)
    })
      .catch(err => console.log(err))
  }

  return (
    <div style={{textAlign: "center"}}>
      <button onClick={showPokemon} >Catch a Pokemon!</button>

      {pokemon.map((p, i)=>
        <p key={i}>{p.name}</p>
      )}

    </div>
  );
}

export default App;