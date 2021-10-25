const Instructions = ({ instruction }) => {
  return (
    <section className="main__instructions animate__animated animate__fadeInDown">
      <h2 className="main__instruction">{instruction ? instruction : "Instrucciones"}</h2>
    </section>
  );
}

export default Instructions;