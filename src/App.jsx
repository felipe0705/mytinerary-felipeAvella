import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store.js";
import HomePage from "./pages/Home";
import Homelayout from "./layouts/HomeLayout";
import { Itinerarie } from "./components/Itineraries";
import Citieslayout from "./layouts/CityLayout";
import CityPage from "./pages/Cities";
import ItinerarieLayout from "./layouts/ItinerarieLayout";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <Homelayout></Homelayout>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/Inicio", element: <HomePage /> },
    ],
  },
  {
    element: <Citieslayout></Citieslayout>,
    children: [{ path: "/Cities", element: <CityPage /> }],
  },
  {
    element: <ItinerarieLayout></ItinerarieLayout>,
    children: [{ path: "/itinerarie", element: <Itinerarie /> }],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        {" "}
        <RouterProvider router={router} />{" "}
      </Provider>
    </>
  );
}

export default App;
