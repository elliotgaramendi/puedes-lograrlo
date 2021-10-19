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

function App() {

  const currentDate = new Date().getFullYear();
  const [data, setData] = useState({});
  const [levelSelect, setLevelSelect] = useState('');
  const [gameMode, setGameMode] = useState('');
  const [gameCard, setGameCard] = useState({});
  const [showCards, setShowCards] = useState(false);

  const { project, instructions, levels, categories, gameCards } = data;

  const consultarApi = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `http://192.168.1.29:5500/json/verdad-o-reto-ea.json`
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
  };

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
              levelSelect === '' ?
                (
                  <section className="container container--flex-column animate__animated animate__rotateIn">
                    <Instructions instruction={project.description} />
                    <LevelForm
                      setLevelSelect={setLevelSelect}
                      levels={levels}
                    />
                    <Instructions instruction={instructions.difficulties} />
                  </section>
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
                              />
                            ) :
                            (
                              <Instructions instruction={instructions.truthOrDare} />
                            )
                        }
                        <button
                          className="container__button container__button--disabled"
                          disabled
                        >
                          😬 Verdad 😬
                        </button>
                        <button
                          className="container__button"
                          onClick={newChallengeCard}
                        >
                          😁 Reto 😁
                        </button>
                      </Fragment>
                    )
                )
            )
        }
      </main>
      {componentFooter}
    </Fragment >
  );
}

export default App;
