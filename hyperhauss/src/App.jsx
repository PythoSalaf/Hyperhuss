import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  // Dashboard,
  GuildDetails,
  GuildLayout,
  Guilds,
  Home,
  LandingLayout,
  Leaderboard,
  Reward,
  Swap,
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
        path: "/guilds/:id",
        element: <GuildDetails />,
      },
      {
        path: "/guilds/trade",
        element: <Trade />,
      },
      // {
      //   path: "/guilds/dashboard",
      //   element: <Dashboard />,
      // },
      {
        path: "/guilds/reward",
        element: <Reward />,
      },
      {
        path: "/guilds/swap",
        element: <Swap />,
      },
      {
        path: "/guilds/leaderboard",
        element: <Leaderboard />,
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
