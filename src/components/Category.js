const Category = ({ element }) => {
  const { id, category, type, emoji, difficulty, level, name, description } = element;

  const classOpeningArticle = id % 2 === 0 ? "card-article animate__animated animate__fadeInLeft" : "card-article animate__animated animate__fadeInRight";
  const classOpeningTitles = id % 2 === 0 ? "card-article__titles" : "card-article__titles card-article__titles--green";

  return (
    <article className={classOpeningArticle}>
      <div className={classOpeningTitles}>
        <h2 className="card-article__category">{category}</h2>
        <h3 className="card-article__type">{type}</h3>
        <span className="card-article__emoji">{emoji}</span>
      </div>
      <div className="card-article__content">
        <h4 className="card-article__difficulty">{difficulty}</h4>
        <h6 className="card-article__level">{level}</h6>
        <h2 className="card-article__name">{name}</h2>
        <p className="card-article__description">{description}</p>
        <button className="card-article__button">💫 Empezar 💫</button>
      </div>
    </article>
  );
}

export default Category;