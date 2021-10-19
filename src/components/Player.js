const Player = ({ player, deletePlayer }) => {
  // const { id, name, positivePoints, negativePoints } = player;
  const { id, name } = player;
  return (
    <section className="players-container__player animate__animated animate__lightSpeedInRight">
      <div>🌟 {name} ✨</div>
      <button
        className="players-container__button container__button--sm"
        onClick={() => deletePlayer(id)}
      >❌ Eliminar ❌</button>
    </section >
  );
}

export default Player;