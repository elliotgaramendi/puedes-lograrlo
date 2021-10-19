import Instructions from './Instructions';
import Player from './Player';

const Players = ({ players, instruction, deletePlayer }) => {
  return (
    <section className="animate__animated animate__lightSpeedInRight">
      <div className="players-container">
        <Instructions instruction={instruction} />
        {players.map((element) => {
          return (
            <Player
              key={element.id}
              player={element}
              deletePlayer={deletePlayer}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Players;