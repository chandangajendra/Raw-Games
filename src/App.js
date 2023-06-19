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

  console.log("react router is going to call");
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
          path: "/Racing",
          element: <Cards apiKey={api} pageSize={9} genre={"racing"} />,
        },
        {
          path: "/Sports",
          element: <Cards apiKey={api} pageSize={9} genre={"sports"} />,
        },
      ],
    },

  ]);
  console.log("react router is going to called");

  return (
    <>
      {/* <Navbar />
      <Cards apiKey={api} pageSize={9} /> */}
      <RouterProvider router={router} />

    </>
  );
}

export default App;
