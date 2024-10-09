
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar";
import Home from "../components/body";
import Footer from "../components/footer";
import backgroundImage from '../../public/2.jpeg';

export default function Homelayout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        
      </header>
      <body>
      <Home></Home>
      </body>
        
      <main className="flex-1 bg-cover m-4 bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>  
        <Outlet>
        
        </Outlet>
      </main>

      <footer className="flex justify-center text-neutral-100 py-8 bg-slate-600 dark:border-t-2 border-slate-600 dark:bg-black">
      <Footer></Footer>
      </footer>
        
    </>
  );
}
