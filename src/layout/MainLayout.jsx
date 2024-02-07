import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout(props) {
  return (
    <div className="max-w-[1240px] px-20 mx-auto flex flex-col justify-between ">
      <div className="wrap mb-50">
        <header className="shadow-md pb-10 pt-0 mb-50 mt-0">
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
