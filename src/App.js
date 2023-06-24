import './App.css';
import { Navbar } from '../src/components/Navbar';
import { Cards } from '../src/components/Cards';
import { Error } from './components/Error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { incNumber, decNumber } from "./action/index";
import { useSelector, useDispatch } from 'react-redux';




function App() {

  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeTheNumber);

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
        {
          path: "/redux",
          element: <div className="quantity">
            <a className="quantity-minus" onClick={() => dispatch(decNumber(2))}>-</a>
            <input type="text" className='quantity-input' value={myState} />
            <a className="quantity-plus" onClick={() => dispatch(incNumber(5))}>+</a>
          </div>,
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
