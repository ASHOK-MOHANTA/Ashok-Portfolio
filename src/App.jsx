import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./Compinents/LoadingScreen";
import "./index.css";
import { Navbar} from "./Compinents/Navbar";
import {MobileMenu} from "./Compinents/MobileMenu";
import { Home } from "./Compinents/sections/Home";
import { About } from "./Compinents/sections/About";
import { Project } from "./Compinents/sections/Project";
import { Contact } from "./Compinents/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >

        <Navbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <MobileMenu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <Home/>
        <About/>
        <Project/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
