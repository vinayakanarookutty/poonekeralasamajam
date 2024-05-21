import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import MoreActivities from './pages/components/MoreActivities';
import MoreGallery from './pages/components/MoreGallery';
import MoreCommittee from './pages/components/MoreCommittee';
import ActivitiesDetails from './pages/components/ActivitiesDetails';
import HistoryTimeLine from './pages/components/HistoryTimeLine';
import BetweenGallery from './pages/components/BetweenGallery';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/more',
      element: <MoreActivities />,
    },
    {
      path: '/gallery',
      element: <MoreGallery />,
    },
    {
      path: '/committee',
      element: <MoreCommittee />,
    },
    {
      path: '/activities',
      element: <ActivitiesDetails />,
    },
    {
      path: '/history',
      element: <HistoryTimeLine />,
    },
    {
      path: '/BetweenGallery',
      element: <BetweenGallery />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
