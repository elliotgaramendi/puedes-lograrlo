const Home = ({ setLevelSelect, levels }) => {
  return (
    <form className="container__form-level">
      <select
        className="container__select-level"
        id="date"
        required
        onChange={(e) => {
          setLevelSelect(e.target.value);
        }}
      >
        <option value="" selected disabled>Seleccionar nivel</option>
        {levels.map((elemento) => {
          return (
            <option
              key={elemento.id}
              value={elemento.level}
              className="container__option-level"
            >
              {elemento.level}: {elemento.recommendedAge} años
            </option>
          );
        })};
      </select>
    </form>
  );
}

export default Home;