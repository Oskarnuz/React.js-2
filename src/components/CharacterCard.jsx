import "./styles.css";

const CharacterCard = ( {image, name, status, species, lastKnown, origin} ) => (
  <article className="characterCard">
    <div className="characterImagen">
      <img
        src={image}
        alt={name}
      />
    </div>
    <div className="characterContent">
      <div className="section">
        <h2>{name}</h2>
        <span className="status">
          {/* <span 
            className={`status__icon ${status === 'Dead' ? 'status_dead' : status === 'unknown' ? 'status_unknown' : 'status_alive'}`}

            ></span> */}
          <span className={`status__icon status__${status.toLowerCase()}`}></span>
          {status} - {species}
        </span>
      </div>
      <div className="section">
        <span className="text-gray">Last known location:</span>
        <a href={lastKnown.url}>{lastKnown.name}</a>
      </div>
      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href={origin.url}>{origin.name}</a>
      </div>
    </div>
  </article>
);

export default CharacterCard;
