import React from 'react';

const Footer = ({ currentDate, author }) => {
  return (
    <footer className="footer animate__animated animate__fadeInUp">
      <p className="footer__title">🦄Copyright &copy; {currentDate} {author}. Todos los derechos reservados.🦄</p>
    </footer>
  );
}

export default Footer;