import {
  ImageWraper,
  DetailsContainer,
  Container,
  Wrapper,
  Genres,
} from './MoviesDetails/MovieDetails.styled';

const MovieInfo = ({ imageData, movie }) => {
  const { title, release_date, vote_average, overview, poster_path } = movie;
  const { base_url } = imageData;
  return (
    <Container>
      <ImageWraper>
        <img src={`${base_url}/original${poster_path}`} alt={title} />
      </ImageWraper>
      <DetailsContainer>
        <Wrapper>
          <h2>
            {title} ({release_date})
          </h2>
          <p>Vote Average : {vote_average}</p>
        </Wrapper>
        <Wrapper>
          <h2>Owerview</h2>
          <p>{overview}</p>
        </Wrapper>
        <Wrapper>
          <h2>Genres</h2>
          <Genres>
            {movie.genres.map(({ name }) => (
              <p key={name}>{name}</p>
            ))}
          </Genres>
        </Wrapper>
      </DetailsContainer>
    </Container>
  );
};

export default MovieInfo;
