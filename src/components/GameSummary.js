const GameSummary = ({ showModalGameSummary, setShowModalGameSummary, players }) => {
  let classModal = '';
  classModal = showModalGameSummary ? ('modal-game-summary--show') : ('');
  let orderedPlayers = [...players];
  orderedPlayers.sort((a, b) => {
    if (a.positivePoints === b.positivePoints) {
      return 0;
    } else if (a.positivePoints > b.positivePoints) {
      return -1;
    } else {
      return 1;
    }
  });
  return (
    <section className={`modal-game-summary ${classModal}`}>
      <div className="modal-game-summary__container">
        <div className="game-summary-players-container">
          {orderedPlayers.map((element) => {
            const { id, name, positivePoints } = element;
            return (
              <div key={id} className="game-summary-players-container__player">
                <div>😎{name}😎</div>
                <div>Puntos (+): {positivePoints}</div>
              </div>
            );
          })}
        </div>
        <button
          type="submit"
          className="modal-player-form__button container__button--lg"
          onClick={() => setShowModalGameSummary(false)}
        >
          😌 Continuar jugando 😌
        </button>
      </div>
    </section>
  );
}

export default GameSummary;