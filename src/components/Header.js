function Header({ profile }) {
  return (
    <header className="header animate__animated animate__fadeIn">
      <span className="header__title-emoji">🎮</span>
      <h1 className="header__title">{profile ? profile.title : 'Juego'}</h1>
      <span className="header__title-emoji">🎮</span>
    </header>
  );
}

export default Header;
