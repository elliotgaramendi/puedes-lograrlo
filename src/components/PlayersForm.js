import { useState } from 'react';
import Instructions from './Instructions';

const PlayersForm = ({ description, setPlayer, setSavePlayer, instruction }) => {

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const registerPlayer = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    setSavePlayer(true);

    const player = {
      id: id,
      name,
      positivePoints: 0,
      negativePoints: 0
    }

    setId(id + 1);
    setPlayer(player);
    setName('');
  };

  return (
    <section className="container container--flex-column animate__animated animate__lightSpeedInLeft">

      <form
        className="container__players-form"
        onSubmit={registerPlayer}
      >
        <input
          type="text"
          className="container__players-form-input-text"
          id="name"
          placeholder="Nombre"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {
          error ?
            (
              <div className="container__error">Todos los campos son obligatorios</div>
            )
            :
            (
              null
            )
        }
        <button type="submit" className="container__form-player-button container__button--lg">🤗 Registrar jugador 🤗</button>
      </form>

      <Instructions instruction={instruction} />

    </section>
  );
};

export default PlayersForm;