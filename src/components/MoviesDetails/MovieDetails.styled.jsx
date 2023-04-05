import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const ImageWraper = styled.div`
  width: 250px;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  gap 20px
`;
const Wrapper = styled.div`
  padding: 10px;
  max-width: 700px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 5px 8px;
  border-radius: 4px;
  background-color: orangered;
  color: white;
  margin-bottom: 5px;
  border: none;
  text-decoration: none;
`;
const Genres = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 4px;
  display: flex;

  gap: 20px;

  margin-bottom: 20px;
`;
const DetailsLink = styled(NavLink)`
  display: inline-block;
  padding: 5px 8px;
  margin-top: 10px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 600;

  &.active {
    background-color: orangered;
    color: white;
    border-radius: 4px;
  }
`;
export {
  ImageWraper,
  DetailsContainer,
  Container,
  Wrapper,
  Button,
  Genres,
  DetailsLink,
};
