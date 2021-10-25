import Instructions from './Instructions';

const Home = ({ setLevelSelect, levels, instruction }) => {
  return (
    <section className="container container--flex-column animate__animated animate__rotateIn">

      <form className="container__level-form">
        <select
          className="container__level-select"
          id="level"
          defaultValue={'DEFAULT'}
          required
          onChange={(e) => {
            setLevelSelect(e.target.value);
          }}
        >
          <option value="DEFAULT" disabled>Seleccionar nivel</option>
          {levels.map((element) => {
            return (
              <option
                key={element.id}
                value={element.level}
                className="container__level-option"
              >
                {element.level}: {element.recommendedAge} años
              </option>
            );
          })};
        </select>
      </form>

      <Instructions instruction={instruction} />

    </section>
  );
}

export default Home;