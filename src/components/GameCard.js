const Card = ({ gameCard }) => {
  const { id, difficulty, description } = gameCard;
  return (
    <article className="game-card animate__animated animate__zoomIn" >
      <h2 className="game-card__description">{description}</h2>
      <h3 className="game-card__difficulty">Dificultad: {difficulty}</h3>
      <h4 className="game-card__id">{id}</h4>
    </article >
  );

}

export default Card;