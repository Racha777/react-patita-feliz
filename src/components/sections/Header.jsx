const Header = ({company}) => {
  return (
    <header className="header container py-3">
      <h2 className="header__name">{company.name}</h2>
      <h1 className="header__slogan">{company.slogan}</h1>
    </header>
  );
};

export default Header;
