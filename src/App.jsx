import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import MainLayout from "./layout/MainLayout";
import { BurgerContext } from "./assets/context/BurgerContext";
import { SectionContext } from "./assets/context/SectionContext";
import { Link, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import NotFound from "./pages/NotFound/NotFound";
// import MainPage from "./pages/login/MainPage";
// import Login from "./pages/login/components/LogIn";
// import SignUp from "./pages/login/components/SignUp";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <BurgerContext.Provider value={{ open, setOpen }}>
          <SectionContext.Provider value={null}>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                {/* <Route path="signup" element={<SignUp/>}/>
                <Route path="login" element={<Login/>}/> */}

                <Route path="*" element={<NotFound/>}/>
               </Route>
            </Routes>
          </SectionContext.Provider>
        </BurgerContext.Provider>
      </div>
    </>
  );
}

export default App;
