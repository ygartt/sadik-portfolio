import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/Intro.css";

const Intro = ({ onComplete }) => {
  const introRef = useRef(null);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!fontLoaded) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.from(".intro-title", {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      })
        .to(".intro-title", {
          opacity: 0,
          y: -30,
          duration: 1.2,
          delay: 0.8,
          ease: "power3.in",
        })
        .to(
          ".intro-panel-top",
          {
            yPercent: -100,
            duration: 1.5,
            ease: "power4.inOut",
          },
          "split",
        )
        .to(
          ".intro-panel-bottom",
          {
            yPercent: 100,
            duration: 1.5,
            ease: "power4.inOut",
          },
          "split",
        );
    }, introRef);

    return () => ctx.revert();
  }, [fontLoaded, onComplete]);

  return (
    <div className="intro-container" ref={introRef}>
      <div className="intro-panel intro-panel-top"></div>
      <div className="intro-panel intro-panel-bottom"></div>

      {fontLoaded && <h1 className="intro-title">محمد صادق</h1>}
    </div>
  );
};

export default Intro;
