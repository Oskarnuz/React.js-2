import CharacterCard from "./components/CharacterCard";
import "./index.css";
//import data from "./assets/data.json";
import axios from "axios";

import React, {useEffect, useState} from "react"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then((response) => {
      setData(response.data.results)
    })
  }, [])

  return (
        
    <div className="app">
      <h1>Rick and Morty Characters</h1>

      <div className="container">

        {data.map((item) => {
          const {id, name, image, species, status, origin, location} = item
          return(
          <CharacterCard
            key={id}
            image={image}
            name={name}
            species={species}
            status={status}
            origin={origin}
            lastKnown={location}
          />
          )
        })}
      </div>
    </div>
  
  );
}

export default App;
