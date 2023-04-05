import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MovieSearchApi } from 'components/Servise/MovieApi';
import { List, Item, LinkItem } from './Home.styled';
import SearchBox from 'components/SearchBox/SearchBox';

const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const searchMovie = async () => {
      try {
        const data = await MovieSearchApi(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchMovie();
  }, [query]);

  useEffect(() => {
    if (!value) {
      return;
    }
    const searchMovie = async () => {
      try {
        const data = await MovieSearchApi(value);
        if (data.results.length === 0) {
          alert(`no response on request ${value}`);
          return;
        }
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
      {movies && <SearchBox handleSubmit={handleSubmit} />}
      <List>
        {movies.map(({ title, id }) => (
          <Item key={id}>
            <LinkItem to={`${id}`} state={{ from: location }}>
              {title}
            </LinkItem>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Movies;
