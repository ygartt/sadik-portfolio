import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Contact.css";

gsap.registerPlugin(ScrollTrigger);

const contactData = [
  {
    id: 1,
    text: "assilsadikart@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=assilsadikart@gmail.com",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
  },
  {
    id: 2,
    text: "assilsadikar2004",
    href: "https://instagram.com/assilsadikar2004",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
    ),
  },
  {
    id: 3,
    text: "+212 707-848701",
    href: "https://wa.me/212707848701",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
];

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(".contact-img", {
        scale: 1.05,
        opacity: 0,
        duration: 1.8,
      })
        .from(
          ".contact-top-card",
          {
            y: "-100%",
            opacity: 0,
            duration: 1,
          },
          "-=1.5",
        )
        .from(
          ".contact-title",
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=1.2",
        )
        .from(
          ".contact-link",
          {
            x: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
          },
          "-=0.8",
        );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-container" ref={contactRef}>
      <div className="contact-top-card"></div>

      <div className="contact-text-wrapper">
        <h1 className="contact-title">Let’s Connect</h1>

        <div className="contact-links">
          {contactData.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>{item.text}</span>
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <img src="/imgs/contact.webp" alt="Contact" className="contact-img" />
    </section>
  );
};

export default Contact;
