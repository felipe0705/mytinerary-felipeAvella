// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav";
import Home from "../components/home";

export default function Homelayout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
        <Home></Home>
      <main>
        <Outlet></Outlet>
      </main>

      <footer></footer>
    </>
  );
}
