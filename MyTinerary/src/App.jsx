import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BodyHome from "./pages/Inicio";
import Homelayout from "./layouts/HomeLayout";
import Cities from "./pages/Cities";
import Citieslayout from "./layouts/CitiesLayout";
import "./App.css";

const router = createBrowserRouter([
  {
    element: <Homelayout></Homelayout>,
    children: [
      { path: "/", element: <BodyHome></BodyHome> },
      { path: "/Inicio", element: <BodyHome></BodyHome> },
    ],
  },
  {
    element: <Citieslayout></Citieslayout>,
    children: [{ path: "/Cities", element: <Cities></Cities> }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      
    </>
  );
}

export default App;
