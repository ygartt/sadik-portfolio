import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Home.css";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: homeRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".hero-img", {
        scale: 1.05,
        opacity: 0,
        duration: 1.8,
      })
        .from(
          [".hero-title", ".hero-slogan", ".hero-signature"],
          {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
          },
          "-=1.2",
        )
        .from(
          ".bottom-card",
          {
            y: "100%",
            opacity: 0,
            duration: 1,
          },
          "-=1",
        );
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-container" ref={homeRef}>
      <div className="hero-text-wrapper">
        <h1 className="hero-title">محمد صادق</h1>
        <span className="hero-slogan">musician and film actor</span>
        <img src="/imgs/sing.png" alt="Signature" className="hero-signature" />
      </div>
      <img src="/imgs/sadik.webp" alt="Mohammed Sadik" className="hero-img" />
      <div className="bottom-card"></div>
    </section>
  );
};

export default Home;
