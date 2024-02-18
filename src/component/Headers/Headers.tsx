import { Header, NavigateButton } from "./StyledHeaders.styled";

const Headers = () => {
  return (
    <Header>
      <NavigateButton to="/" className="navigate-button">Home</NavigateButton>

      <nav className="navigate">
        <NavigateButton to="/catalog" className="navigate-button">Catalog</NavigateButton>
        <NavigateButton to="/favorites" className="navigate-button">Favorites</NavigateButton>
      </nav>
    </Header>
  );
};

export default Headers;
