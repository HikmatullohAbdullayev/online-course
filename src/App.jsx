import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import MainLayout from "./layout/MainLayout";
import { BurgerContext } from "./context/BurgerContext";
import { SectionContext } from "./context/SectionContext";
import {  Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import Signup2 from "./pages/login/components/Signup2";
import Courses from "./pages/courses/Courses";

import UIUX from "./pages/courses/openCourse/pages/UIUX";
import WebDev from "./pages/courses/openCourse/pages/WebDev";
import WebDesing from "./pages/courses/openCourse/pages/WebDesing"
import Mobile from "./pages/courses/openCourse/pages/Mobile"
import DesingBeginner from "./pages/courses/openCourse/pages/DesingBeginner"






function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
        <BurgerContext.Provider value={{ open, setOpen }}>
          <SectionContext.Provider value={null}>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="courses" element={<Courses/>} />

                  <Route path="courses/uiux" element={<UIUX/>}/>
                  <Route path="courses/desingbeginner" element={<DesingBeginner/>}/>
                  <Route path="courses/mobile" element={<Mobile/>}/>
                  <Route path="courses/webdesing" element={<WebDesing/>}/>
                  <Route path="courses/webdev" element={<WebDev/>}/>
                
                
                <Route path="signup" element={<Signup2/>}/>

                <Route path="*" element={<NotFound/>}/>
               </Route>
            </Routes>
          </SectionContext.Provider>
        </BurgerContext.Provider>
    </>
  );
}

export default App;
