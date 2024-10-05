import "./App.css";
import {RouterProvider, createBrowserRouter} from'react-router-dom'
import Home from "./pages/Home";
import Cities from "./pages/Cities";


const router = createBrowserRouter([
  {path:"/",element: <Home></Home>},
  {path:"/home",element: <Home></Home>},
  {path:"/Cities",element: <Cities></Cities>}
])
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
