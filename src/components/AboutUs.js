const AboutUs = ({ showModalAboutUs, setShowModalAboutUs }) => {
  let classModal = '';
  classModal = showModalAboutUs ? ('modal-about-us--show') : ('');
  return (
    <section className={`modal-about-us ${classModal}`}>
      <div className="modal-about-us__container">
        <h2 className="modal-about-us__message">🤗Ayúdanos a seguir creciendo.🤗</h2>
        <div className="modal-about-us__container-images">
          <img src="https://i.postimg.cc/MGv0GRNB/qr-yape.jpg" alt="Código QR yape" className="modal-about-us__image"></img>
          <img src="https://i.postimg.cc/t4rtyDSy/qr-plin.jpg" alt="Código QR plin" className="modal-about-us__image"></img>
        </div>
        <h3 className="modal-about-us__message">🥰Hagamos juntos un mundo mejor, invítanos un café virtual.🥰</h3>
        <h4 className="modal-about-us__message">😀Con tu apoyo podemos mantener y mejorar nuestra aplicación.😀</h4>
        <h5 className="modal-about-us__message">👨‍💻Elliot Garamendi👨‍💻 && 👩‍💻Acsafkineret Yonamine👩‍💻</h5>
        <h6 className="modal-about-us__message">In Game: Se puede saltar los retos máximo 3 veces por jugador.</h6>
        <button
          type="submit"
          className="modal-player-form__button container__button--lg container__button--secondary"
          onClick={() => setShowModalAboutUs(false)}
        >
          🙌 Regresar 🙌
        </button>
      </div>
    </section>
  );
}

export default AboutUs;