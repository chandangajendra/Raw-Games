import './App.css';
import { Navbar } from '../src/components/Navbar';
import { Cards } from '../src/components/Cards';
import { Error } from './components/Error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  let api = "22112c2feadd44a5a4a5dec82e74fd95";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Cards apiKey={api} pageSize={9} genre={"action"} />,
        },
        {
          path: "/racing",
          element: <Cards apiKey={api} pageSize={9} genre={"racing"} />,
        },
        {
          path: "/sports",
          element: <Cards apiKey={api} pageSize={9} genre={"sports"} />,
        },
        {
          path: "/shooter",
          element: <Cards apiKey={api} pageSize={9} genre={"shooter"} />,
        },
        {
          path: "/adventure",
          element: <Cards apiKey={api} pageSize={9} genre={"adventure"} />,
        },
        {
          path: "/multiplayer",
          element: <Cards apiKey={api} pageSize={9} genre={"massively-multiplayer"} />,
        },
        {
          path: "/Fighting",
          element: <Cards apiKey={api} pageSize={9} genre={"fighting"} />,
        },
        {
          path: "/RPG",
          element: <Cards apiKey={api} pageSize={9} genre={"role-playing-games-rpg"} />,
        },
        {
          path: "/Indie",
          element: <Cards apiKey={api} pageSize={9} genre={"indie"} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
