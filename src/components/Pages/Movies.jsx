import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieSearchApi } from 'components/Servise/MovieApi';
import { List, Item, LinkItem } from './Home.styled';

const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!value) {
      return;
    }
    const searchMovie = async () => {
      try {
        const data = await MovieSearchApi(value);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchMovie();
  }, [value]);

  const handleSubmit = e => {
    e.preventDefault();

    setValue(e.target.elements.query.value);

    setSearchParams(
      value !== '' ? {} : { query: e.target.elements.query.value }
    );

    e.target.elements.query.value = '';
  };

  return (
    <>
      {!value && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="query"></input>
          <button type="submit">Search</button>
        </form>
      )}
      <List>
        {movies.map(({ title, id }) => (
          <Item key={id}>
            <LinkItem to={`${id}`}>{title}</LinkItem>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Movies;
