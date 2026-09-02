import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Works.css";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const worksRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: worksRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".works-title", {
        y: 50,
        opacity: 0,
        duration: 1,
      }).from(
        ".works-line",
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
        },
        "-=0.5",
      );

      gsap.utils.toArray(".works-grid").forEach((grid) => {
        const q = gsap.utils.selector(grid);
        const gridTl = gsap.timeline({
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
          defaults: { ease: "power3.out" },
        });

        gridTl
          .from(q(".works-movie-title"), {
            y: 50,
            opacity: 0,
            duration: 1,
          })
          .from(
            q(".works-desc"),
            {
              y: 30,
              opacity: 0,
              duration: 1,
            },
            "-=0.8",
          )
          .from(
            q(".works-date"),
            {
              y: 20,
              opacity: 0,
              duration: 1,
            },
            "-=0.8",
          )
          .from(
            q(".works-images img"),
            {
              scale: 1.05,
              opacity: 0,
              duration: 1.2,
            },
            "-=1",
          );
      });
    }, worksRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="works-container" ref={worksRef}>
      <div className="works-content">
        <h2 className="works-title">Upcoming Works</h2>
        <div className="works-line"></div>

        <div className="works-grid">
          <div className="works-left">
            <div className="works-sticky-content">
              <p className="works-desc">
                A story of betrayal and exploitation, following a woman facing
                harsh circumstances that leave her vulnerable to manipulation.
                The film explores her struggle, the choices she is forced to
                make, and the difficult realities of women living under social
                and economic pressure.
              </p>
              <span className="works-date">* coming soon</span>
            </div>
          </div>

          <div className="works-right">
            <h3 className="works-movie-title">.محاكمة امراة</h3>
            <div className="works-images">
              <img src="/imgs/work1.jpg" alt="محاكمة امراة" />
            </div>
          </div>
        </div>

        <div className="works-grid">
          <div className="works-left">
            <div className="works-sticky-content">
              <p className="works-desc">
                A story about two people brought together by love, facing the
                challenges that test their relationship. The film explores love,
                connection, and the choices we make when emotions become
                stronger than circumstances.
              </p>
              <span className="works-date">* coming soon</span>
            </div>
          </div>

          <div className="works-right">
            <h3 className="works-movie-title">.قصة عشق</h3>
            <div className="works-images">
              <img src="/imgs/work2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
