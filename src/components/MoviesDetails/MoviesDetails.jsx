import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails, getImages } from '../Servise/MovieApi';
import { Button, DetailsLink } from './MovieDetails.styled';
import MovieInfo from 'components/MovieInfo';
const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [imageData, setImageData] = useState(null);
  const navigate = useNavigate();

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

  const handleGoBack = () => {
    navigate(-1);
  };
  if (!movie) {
    return null;
  }
  if (!imageData) {
    return;
  }

  return (
    <>
      <Button onClick={handleGoBack} type="button">
        Go Back
      </Button>
      <MovieInfo movie={movie} imageData={imageData} />
      <div>
        <hr />
        <DetailsLink to={'cast'}>Cast</DetailsLink>
        <DetailsLink to={'reviews'}>Reviews</DetailsLink>
        <hr />
      </div>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
