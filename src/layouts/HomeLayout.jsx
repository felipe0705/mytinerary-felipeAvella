import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Home } from "../components/Bodyhome";

export default function HomeLayout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <section>
        <Home></Home>
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
