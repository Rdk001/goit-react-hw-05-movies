import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'components/Servise/MovieApi';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await getMovieDetails(movieId, '/reviews');

        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    getReviews();
  }, [movieId]);

  if (!reviews) {
    return;
  }
  if (reviews.length === 0) {
    return <h2>We don't have any reviews for this move`</h2>;
  }
  return (
    <>
      {reviews.map(({ author, content, id }) => (
        <div key={id}>
          <h3>{author}</h3> <p>{content}</p>
        </div>
      ))}
    </>
  );
};

export default Reviews;
