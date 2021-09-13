const Category = ({ element, setGameMode }) => {
  const { id, category, type, emoji, difficulty, level, name, description } = element;

  const updateGameMode = (id) => {
    setGameMode(id);
  }

  const classOpeningArticle = id % 2 === 0 ? "category-card animate__animated animate__fadeInLeft" : "category-card animate__animated animate__fadeInRight";
  const classOpeningTitles = id % 2 === 0 ? "category-card__titles" : "category-card__titles category-card__titles--green";

  return (
    <article className={classOpeningArticle}>
      <div className={classOpeningTitles}>
        <h2 className="category-card__category">{category}</h2>
        <h3 className="category-card__type">{type}</h3>
        <span className="category-card__emoji">{emoji}</span>
      </div>
      <div className="category-card__content">
        <h4 className="category-card__difficulty">{difficulty}</h4>
        <h6 className="category-card__level">{level}</h6>
        <h2 className="category-card__name">{name}</h2>
        <p className="category-card__description">{description}</p>
        <button
          type="button"
          className="category-card__button"
          onClick={() => updateGameMode(id)}
        >💫 Empezar 💫</button>
      </div>
    </article>
  );
}

export default Category;