import { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails, getImages } from '../Servise/MovieApi';
import MovieInfo from 'components/MovieInfo';
import { Button, DetailsLink } from './MovieDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [imageData, setImageData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const savedNavigate = useRef(location.state?.from);

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId, '');
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    const images = async () => {
      try {
        const dataImg = await getImages();
        setImageData(dataImg.images);
      } catch (error) {
        console.log(error.message);
      }
    };
    images();
    movieDetails();
  }, [movieId]);

  if (!movie || !imageData) {
    return null;
  }

  const handleGoBack = () => {
    navigate(savedNavigate.current);
  };

  return (
    <>
      <Button onClick={handleGoBack} type="button">
        Go Back
      </Button>

      <MovieInfo movie={movie} imageData={imageData} />
      <div>
        <hr />
        <h2>Aditional information</h2>
        <DetailsLink to={'cast'}>Cast</DetailsLink>
        <DetailsLink to={'reviews'}>Reviews</DetailsLink>
        <hr />
      </div>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
