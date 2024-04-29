
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className=" shadow-md  flex flex-col justify-between ">
      <div className="wrap mb-50">
        <header className=" container   relative pb-10 pt-0 mb-50 mt-0">
          <Header />
        </header>
        <main className="container">
          <Outlet />
        </main>
      </div>

      <footer >
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
