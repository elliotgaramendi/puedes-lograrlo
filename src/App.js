import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Category from './components/Category';
import Instructions from './components/Instructions';
import GameCard from "./components/GameCard";
import Spinner from "./components/Spinner";

function App() {

  const currentDate = new Date().getFullYear();
  const [data, setData] = useState({});
  const [gameMode, setGameMode] = useState('');
  const [gameCard, setGameCard] = useState({});

  const { profile, instructions, categories, gameCards } = data;

  const consultarApi = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://elliotxleo.github.io/api-prueba/verdad-o-reto-ea.json`
      });
      const data = res.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  const newChallengeCard = () => {
    const i = Math.floor(Math.random() * (gameCards[gameMode].challenges.length + 0));
    const gameCardInfo = gameCards.filter((card) => {
      return (card.id === gameMode);
    });
    setGameCard(gameCardInfo[0].challenges[i]);
  };

  const componenteHeader = Object.keys(data).length === 0 ? <Header /> : <Header profile={profile} />;
  const componenteFooter = Object.keys(data).length === 0 ? <Footer currentDate={currentDate} /> : <Footer currentDate={currentDate} author={profile.name} />;
  const componenteInstructions = Object.keys(data).length === 0 ? <Instructions /> : <Instructions instruction={instructions.initialInstructions} />;

  return (
    <Fragment>
      {componenteHeader}

      <main className="main">
        <section className="container">
          {
            gameMode === ''
              ? (
                Object.keys(data).length !== 0
                  ? (
                    categories.map((element) => {
                      return (
                        <Category
                          key={element.id}
                          element={element}
                          setGameMode={setGameMode}
                        />
                      )
                    })
                  )
                  : (
                    <Spinner />
                  )
              )
              : (
                Object.keys(gameCard).length === 0
                  ? (
                    <Instructions instruction={instructions.ingameInstructions} />
                  )
                  : (
                    <GameCard
                      gameCard={gameCard}
                    />
                  )
              )
          }
        </section>
        {
          gameMode === ''
            ? (
              componenteInstructions
            )
            : (
              <Fragment>
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
        }
      </main>

      {componenteFooter}
    </Fragment>
  );
}

export default App;
