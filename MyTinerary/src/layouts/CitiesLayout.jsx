// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar";
import Footer from "../components/footer";


export default function Citieslayout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
     <main >
        <Outlet></Outlet>
      </main>

      <footer className="bg-black bg-opacity-50">
        <Footer></Footer>
      </footer>
    </>
  );
}
