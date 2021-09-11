import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';

function App() {

  const currentDate = new Date().getFullYear();
  const [data, setData] = useState({});

  const { profile, categories } = data;

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
  }

  useEffect(() => {
    consultarApi();
  }, []);

  const componenteHeader = Object.keys(data).length === 0 ? <Header /> : <Header profile={profile} />;
  const componenteFooter = Object.keys(data).length === 0 ? <Footer currentDate={currentDate} /> : <Footer currentDate={currentDate} author={profile.name} />;

  return (
    <Fragment>
      {componenteHeader}

      <main>
        <section className="container">
          <div>Categoría</div>
        </section>
      </main>

      {componenteFooter}
    </Fragment>
  );
}

export default App;
