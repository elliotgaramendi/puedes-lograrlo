import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Category from './components/Category';
import Instructions from './components/Instructions';
import Spinner from "./components/Spinner";

function App() {

  const currentDate = new Date().getFullYear();
  const [data, setData] = useState({});

  const { profile, instructions, categories } = data;

  const consultarApi = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://elliotxleo.github.io/api-prueba/verdad-o-reto-ea.json`
      });
      const data = res.data;
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    consultarApi();
  }, []);

  const componenteHeader = Object.keys(data).length === 0 ? <Header /> : <Header profile={profile} />;
  const componenteFooter = Object.keys(data).length === 0 ? <Footer currentDate={currentDate} /> : <Footer currentDate={currentDate} author={profile.name} />;
  const componenteInstructions = Object.keys(data).length === 0 ? <Instructions /> : <Instructions instructions={instructions} />;

  return (
    <Fragment>
      {componenteHeader}

      <main className="main">
        <section className="container">
          {Object.keys(data).length !== 0
            ? (
              categories.map((element) => {
                return (
                  <Category
                    key={element.id}
                    element={element}
                  />
                )
              })
            )
            : (
              <Spinner />
            )
          }
        </section>
        {componenteInstructions}
      </main>

      {componenteFooter}
    </Fragment>
  );
}

export default App;
