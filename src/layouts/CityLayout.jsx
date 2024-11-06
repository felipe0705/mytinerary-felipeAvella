import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Cities } from "../components/Bodycities";

export default function CityLayout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <section>
        <Cities></Cities>
      </section>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
