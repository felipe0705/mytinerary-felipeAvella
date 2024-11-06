import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ItinerariePage } from "../components/Itineraries";


export default function ItinerarieLayout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      
      <ItinerariePage></ItinerariePage>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
