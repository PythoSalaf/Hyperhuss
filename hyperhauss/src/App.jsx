import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Dashboard,
  GuildLayout,
  Guilds,
  Home,
  LandingLayout,
  Trade,
} from "./pages";
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
      {
        path: "/guilds/trade",
        element: <Trade />,
      },
      {
        path: "/guilds/dashboard",
        element: <Dashboard />,
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
