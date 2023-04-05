import { useEffect, useState } from 'react';
import HomeApi from 'components/Servise/HomeApi';
import { List, Item, LinkItem } from './Home.styled';
import { useLocation } from 'react-router-dom';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const addMovies = async () => {
      try {
        const data = await HomeApi();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    addMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <List>
        {movies.map(({ title, id }) => (
          <Item key={id}>
            <LinkItem to={`movies/${id}`} state={{ from: location }}>
              {title}
            </LinkItem>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Home;
