import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 5px;
  list-style: none;
  padding: 0px;
`;

const Item = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  :hover {
    background: orangered;
  }
`;

const LinkItem = styled(Link)`
  display: block;
  padding: 5px;
  text-decoration: none;
  color: #212121;
  width: 100%;
  :hover {
    color: white;
  }
`;
export { List, Item, LinkItem };
