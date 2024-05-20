import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import MoreActivities from './pages/components/MoreActivities';
import MoreGallery from './pages/components/MoreGallery';
import MoreCommittee from './pages/components/MoreCommittee';

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
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
