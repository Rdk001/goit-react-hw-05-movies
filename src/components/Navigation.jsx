import { Header, Nav, HeaderLink } from './App/App.styled';
const Navigation = () => {
  return (
    <Header>
      <Nav>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="movies">Movies</HeaderLink>
      </Nav>
    </Header>
  );
};

export default Navigation;
