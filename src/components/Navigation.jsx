import { useLocation } from 'react-router-dom';
import { Header, Nav, HeaderLink } from './App/App.styled';
const Navigation = () => {
  const location = useLocation();

  return (
    <Header>
      <Nav>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="movies" state={location}>
          Movies
        </HeaderLink>
      </Nav>
    </Header>
  );
};

export default Navigation;
