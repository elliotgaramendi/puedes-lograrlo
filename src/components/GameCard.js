const Card = ({ gameCard, currentPlayer, currentRound, complyChallenge, skipChallenge }) => {
  const { id, difficulty, description } = gameCard;
  return (
    <article className="game-card animate__animated animate__zoomIn" >
      <div className="game-card__header">
        <h1 className="game-card__title">{currentPlayer.name}</h1>
        <h4 className="game-card__points">Puntos(+): {currentPlayer.positivePoints}  Puntos(-): {currentPlayer.negativePoints}</h4>
      </div>
      <div className="game-card__body">
        <h4 className="game-card__subtitle">Ronda: {currentRound}</h4>
        <h2 className="game-card__description">{description}</h2>
        <h3 className="game-card__difficulty">Dificultad: {difficulty}</h3>
        <h4 className="game-card__id">Id: {id}</h4>
      </div>
      <div className="game-card__footer">
        <button
          className="game-card__button container__button--sm container__button--success"
          onClick={complyChallenge}
        >🤠 Reto cumplido 🤠</button>
        <button
          className="game-card__button container__button--sm container__button--secondary"
          onClick={skipChallenge}
        >😭 Saltar Reto 😭</button>
      </div>
    </article >
  );

}

export default Card;