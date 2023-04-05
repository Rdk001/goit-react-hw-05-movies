import { useEffect, useState } from 'react';
import HomeApi from 'components/Servise/HomeApi';
import { List, Item, LinkItem } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
      <List>
        {movies.map(({ title, id }) => (
          <Item key={id}>
            <LinkItem to={`movies/${id}`}>{title}</LinkItem>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Home;
