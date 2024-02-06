import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import MainLayout from "./layout/MainLayout";
import { BurgerContext } from "./assets/context/BurgerContext";
import { SectionContext } from "./assets/context/SectionContext";
import { Link, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import NotFound from "./pages/NotFound/NotFound";
import MainPage from "./pages/login/MainPage";
import Login2 from "./pages/login/components/Login2";
import Signup2 from "./pages/login/components/Signup2";

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
                <Route path="signup" element={<Signup2/>}/>
                <Route path="login" element={<Login2/>}/>

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
