import CharacterCard from "./components/CharacterCard";

import data from "./assets/data.json";

import "./index.css";

function App() {
  return (
        
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Your code here</h2>

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
