import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Category from './components/Category';
import Instructions from './components/Instructions';
import GameCard from "./components/GameCard";
import Spinner from "./components/Spinner";
import LevelForm from './components/LevelForm';
import PlayersForm from './components/PlayersForm';
import Players from './components/Players';

function App() {

  const currentDate = new Date().getFullYear();

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [turnRound, setTurnRound] = useState(1);
  const [currentRound, setCurrentRound] = useState(1);
  const [player, setPlayer] = useState({});
  const [players, setPlayers] = useState([]);
  const [savePlayer, setSavePlayer] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState({
    id: -1,
    name: '',
    positivePoints: 0,
    negativePoints: 0
  });
  const [levelSelect, setLevelSelect] = useState('');
  const [gameMode, setGameMode] = useState('');
  const [gameCard, setGameCard] = useState({});
  const [showCards, setShowCards] = useState(false);

  const { project, instructions, levels, categories, gameCards } = data;

  const consultarApi = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://elliotxleo.github.io/api-publica/json/verdad-o-reto-ea.json'
      });
      const data = res.data;
      setData(data);
    } catch (error) {
      Swal.fire({
        position: 'center',
        title: '¡Ha ocurrido un error! Contactar con soporte.',
        text: error,
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  useEffect(() => {
    if (savePlayer) {
      setPlayers([
        ...players,
        player
      ]);
      setSavePlayer(false);
    }

  }, [player, players, savePlayer]);

  const newChallengeCard = () => {
    const gameCardInfoMode = gameCards.filter((card) => {
      return (card.id === gameMode);
    });
    const gameCardInfoModeLevel = gameCardInfoMode[0].challenges.filter((card) => {
      return (card.difficulty === levelSelect);
    });
    const i = Math.floor((Math.random() * (gameCardInfoModeLevel.length)) + 0);
    setGameCard(gameCardInfoModeLevel[i]);
    setShowCards(true);

    if (turnRound <= players.length) {
      setCurrentPlayer(players[turnRound - 1]);
      setTurnRound(turnRound + 1);
    } else {
      setCurrentPlayer(players[0]);
      setTurnRound(2);
      setCurrentRound(currentRound + 1);
    }
  };

  const updatePlayers = () => {
    setPlayers(
      players.map((element) => {
        if (element.id !== currentPlayer.id) {
          return element;
        } else {
          return currentPlayer;
        };
      })
    );
  };

  const complyChallenge = () => {
    setCurrentPlayer({
      positivePoints: currentPlayer.positivePoints++
    });
    updatePlayers();
    newChallengeCard();
  };
  const skipChallenge = () => {
    setCurrentPlayer({
      positivePoints: currentPlayer.negativePoints++
    });
    updatePlayers();
    newChallengeCard();
  };

  const deletePlayer = (id) => {
    const swal = Swal.mixin({
      customClass: {
        confirmButton: 'container__button container__button--success',
        cancelButton: 'container__button'
      },
      buttonsStyling: false
    });
    swal.fire({
      title: '¿Estás segur@?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, bórralo!',
      cancelButtonText: '¡No, cancélalo!',
      reverseButtons: true,
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const remainingPlayers = players.filter((element) => {
          return (element.id !== id);
        });
        setPlayers(remainingPlayers);
        swal.fire(
          '¡Eliminado!',
          'Ha sido eliminado.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swal.fire(
          'Cancelad@',
          'Está seguro :)',
          'error'
        );
      }
    });
  }

  const componentFooter = Object.keys(data).length === 0 ? <Footer currentDate={currentDate} /> : <Footer currentDate={currentDate} author={project.author} />;

  return (
    <Fragment>
      <Header project={project} />
      <main className="main">
        {
          Object.keys(data).length === 0 ?
            (
              <Spinner />
            )
            :
            (
              <Fragment>
                {players.length === 0 ? (<Instructions instruction={project.description} />) : (null)}
                {
                  startGame ?
                    (
                      levelSelect === '' ?
                        (
                          <LevelForm
                            setLevelSelect={setLevelSelect}
                            levels={levels}
                            instruction={instructions.difficulties}
                          />
                        )
                        :
                        (
                          gameMode === '' ?
                            (
                              <Fragment>
                                <section className="container">
                                  {
                                    categories.map((element) => {
                                      return (
                                        <Category
                                          key={element.id}
                                          element={element}
                                          setGameMode={setGameMode}
                                          levelSelect={levelSelect}
                                        />
                                      );
                                    })
                                  }
                                </section>
                                <Instructions instruction={instructions.categories} />
                              </Fragment>
                            )
                            :
                            (
                              <Fragment>
                                {
                                  showCards ?
                                    (
                                      <GameCard
                                        gameCard={gameCard}
                                        currentPlayer={currentPlayer}
                                        currentRound={currentRound}
                                        newChallengeCard={newChallengeCard}
                                        complyChallenge={complyChallenge}
                                        skipChallenge={skipChallenge}
                                      />
                                    ) :
                                    (
                                      <Fragment>
                                        <Instructions instruction={instructions.truthOrDare} />
                                        <button
                                          className="container__button"
                                          onClick={newChallengeCard}
                                        >
                                          😁 Reto 😁
                                        </button>
                                      </Fragment>
                                    )
                                }
                              </Fragment>
                            )
                        )
                    )
                    :
                    (
                      <Fragment>
                        <Players
                          players={players}
                          instruction={instructions.managePlayers}
                          deletePlayer={deletePlayer}
                        />
                        <PlayersForm
                          showModal={showModal}
                          setShowModal={setShowModal}
                          setPlayer={setPlayer}
                          setSavePlayer={setSavePlayer}
                        />
                        <section className="container container--flex-column animate__animated animate__lightSpeedInLeft">
                          <button
                            className="container__button container__button--lg"
                            onClick={() => setShowModal(true)}
                          >
                            🤗 Registrar jugadores 🤗
                          </button>
                          {players.length === 0 ? (<Instructions instruction={instructions.registerPlayers} />) : (null)}
                          {players.length === 0 ?
                            (
                              null
                            )
                            :
                            (
                              <button
                                className="container__button container__button--lg"
                                onClick={() => setStartGame(true)}
                              >
                                🏅 Empezar el juego 🏅
                              </button>
                            )
                          }
                        </section>
                      </Fragment>
                    )
                }
              </Fragment>
            )
        }
      </main>
      {componentFooter}
    </Fragment >
  );
}

export default App;
