import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Intro from "./pages/intro/Intro";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/login/Login";
import CreateCv from "./pages/createCV/CreateCv";
import Table from "./pages/createCV/components/Table";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Intro />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/create",
          element: <Table />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/signup",
          element: <Login />,
        },

        { path: "/*", element: <>error</> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
