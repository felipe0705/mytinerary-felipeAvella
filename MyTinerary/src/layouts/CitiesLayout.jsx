// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav";

export default function Citieslayout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer></footer>
    </>
  );
}
