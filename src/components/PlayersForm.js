import { useState } from 'react';

const PlayersForm = ({ showModalPlayersForm, setShowModalPlayersForm, setPlayer, setSavePlayer }) => {

  let classModal = '';
  classModal = showModalPlayersForm ? ('modal-player-form--show') : ('');

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
    setShowModalPlayersForm(false);
  };

  return (
    <section className={`modal-player-form ${classModal}`}>
      <div className="modal-player-form__container">

        <form
          className="modal-player-form__form"
          onSubmit={registerPlayer}
        >
          <input
            type="text"
            className="modal-player-form__input-text"
            id="name"
            placeholder="Nombre"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {
            error ?
              (
                <div className="modal-player-form__error">Todos los campos son obligatorios</div>
              )
              :
              (
                null
              )
          }
          <button
            type="submit"
            className="modal-player-form__button container__button--lg"
          >
            🤗 Registrar jugador 🤗
          </button>
        </form>

      </div>
    </section>
  );
};

export default PlayersForm;