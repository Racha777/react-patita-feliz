const Footer = ({ credits }) => {
    const {year,author}=credits;
  return (
    <footer className="footer container py-3">
      <div className="container">
          <h2 className="text-light fs-6 m-0">Copyright &copy; {year} {author}. Todos los derechos reservados</h2>
      </div>
    </footer>
  );
};

export default Footer;
