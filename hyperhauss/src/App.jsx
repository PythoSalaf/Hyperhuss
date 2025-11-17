import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GuildLayout, Guilds, Home, LandingLayout } from "./pages";
import { PageNotFound } from "./components";

const routes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/guilds",
    element: <GuildLayout />,
    children: [
      {
        index: true,
        element: <Guilds />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
