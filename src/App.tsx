import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage/>,
    },
  ]);
  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
