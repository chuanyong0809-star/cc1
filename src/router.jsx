import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import MuscleListPage from './pages/MuscleListPage';
import MuscleDetailPage from './pages/MuscleDetailPage';
import ExerciseDetailPage from './pages/ExerciseDetailPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'muscles', element: <MuscleListPage /> },
      { path: 'muscles/:muscleId', element: <MuscleDetailPage /> },
      { path: 'exercises/:exerciseId', element: <ExerciseDetailPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
