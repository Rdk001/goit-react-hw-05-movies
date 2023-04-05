import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;
const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;
const HeaderLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
export { Container, Header, Nav, HeaderLink };
