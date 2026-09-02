import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".about-title", {
        y: 50,
        opacity: 0,
        duration: 1,
      })
        .from(
          ".about-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1,
          },
          "-=0.5",
        )
        .from(
          ".about-sticky-text p",
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.8",
        );

      gsap.utils.toArray(".about-right img").forEach((img) => {
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-container" ref={aboutRef}>
      <div className="about-content">
        <h2 className="about-title">behind the Artist</h2>
        <div className="about-line"></div>

        <div className="about-grid">
          <div className="about-left">
            <div className="about-sticky-text">
              <p>
                A moroccan singer and theatre artist, deeply connected to the
                rich tradition of Malhoun. Through music and performance, I
                explore stories, emotions, and human experiences, blending the
                spirit of Moroccan heritage with my own artistic expression.
              </p>
            </div>
          </div>

          <div className="about-right">
            <img src="/imgs/1.jpeg" alt="Mohammed Sadik 1" />
            <img src="/imgs/2.jpeg" alt="Mohammed Sadik 2" />
            <img src="/imgs/3.jpeg" alt="Mohammed Sadik 3" />
            <img src="/imgs/4.jpeg" alt="Mohammed Sadik 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
