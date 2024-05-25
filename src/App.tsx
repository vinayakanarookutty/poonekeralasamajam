import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import MoreActivities from "./components/MoreActivities";
import MoreGallery from "./components/MoreGallery";
import ActivitiesDetails from "./components/ActivitiesDetails";
import HistoryTimeLine from "./components/HistoryTimeLine";
import BetweenGallery from "./components/BetweenGallery";
import MoreCommittee from "./components/MoreCommittee";
import Events from "./pages/Events";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/more",
            element: <MoreActivities />,
        },
        {
            path: "/gallery",
            element: <MoreGallery />,
        },
        {
            path: "/committee",
            element: <MoreCommittee />,
        },
        {
            path: "/activities",
            element: <ActivitiesDetails />,
        },
        {
            path: "/history",
            element: <HistoryTimeLine />,
        },
        {
            path: "/BetweenGallery",
            element: <BetweenGallery />,
        },
        {
            path: "/events",
            element: <Events />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
