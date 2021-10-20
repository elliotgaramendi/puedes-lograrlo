const Player = ({ player, deletePlayer }) => {
  // const { id, name, positivePoints, negativePoints } = player;
  const { id, name } = player;
  let animateClass = '';
  switch (id) {
    case 0:
      animateClass = 'animate__fadeInTopLeft';
      break;
    case 1:
      animateClass = 'animate__fadeInBottomRight';
      break;
    case 2:
      animateClass = 'animate__fadeInBottomLeft';
      break;
    case 3:
      animateClass = 'animate__fadeInTopRight';
      break;
    default:
      animateClass = 'animate__zoomIn';
      break;
  }
  return (
    <section className={`player-container__player animate__animated ${animateClass}`}>
      <div>🌟 {name} ✨</div>
      <button
        className="player-container__button container__button--sm"
        onClick={() => deletePlayer(id)}
      >❌ Eliminar ❌</button>
    </section >
  );
}

export default Player;