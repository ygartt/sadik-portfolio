import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import "./App.css";

import Intro from "./pages/Intro";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <>
      {!introFinished && <Intro onComplete={() => setIntroFinished(true)} />}

      <ReactLenis
        root
        options={{
          lerp: 0.015,
          wheelMultiplier: 0.37,
          smoothWheel: true,
          smoothTouch: true,
          syncTouch: true,
          touchMultiplier: 1.5,
        }}
      >
        <div className="app-container">
          <Home />
          <About />
          <Works />
          <Contact />
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
