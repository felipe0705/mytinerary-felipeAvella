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
      { path: "/inicio", element: <BodyHome></BodyHome> },
    ],
  },
  {
    element: <Citieslayout></Citieslayout>,
    children: [{ path: "/cities", element: <Cities></Cities> }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <button
        className="z-30 fixed bottom-40 right-4 px-3 py-1 text-2xl text-white fa-solid fa-arrow-up hover:scale-110 active:animate-ping transition ease-in-out duration-300 rounded-full bg-blue-600 shadow-md block"
        aria-hidden="true"
      ></button>
    </>
  );
}

export default App;
