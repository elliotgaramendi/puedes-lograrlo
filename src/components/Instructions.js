const Indications = ({ instructions }) => {
  return (
    <section className="main__instructions animate__animated animate__fadeInDown">
      <h2 className="main__instruction">🎮 {instructions ? instructions.instruction : "Indicaciones"} 🎮</h2>
    </section>
  );
}

export default Indications;