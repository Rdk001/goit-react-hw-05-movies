import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Navigation from 'components/Navigation';
import { Container } from './App.styled';
import MoviesDetails from '../MoviesDetails/MoviesDetails';

const Home = lazy(() => import('components/Pages/Home'));
const Movies = lazy(() => import('components/Pages/Movies'));
const NotFound = lazy(() => import('components/Pages/NotFound'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="movies/:movieId"
            element={
              <Suspense fallback={<h2>loading...</h2>}>
                <MoviesDetails />
              </Suspense>
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
