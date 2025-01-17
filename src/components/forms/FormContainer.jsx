import React, { useEffect } from "react";
import JoinForm from "./JoinForm";
import ContactForm from "./ContactForm";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./form.css";

const FormContainer = ({ events, setEvents }) => {
  useEffect(() => {
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <>
      <section
        id="connect"
        className="connectsec bg-storm-darker button-container py-20 text-center"
      >
        <button
          aria-label="Contact Us"
          className={`form-button ${events === "contact" ? "active" : ""}`}
          onClick={() => setEvents("contact")}
        >
          Contact us
        </button>

        <button
          aria-label="Join us"
          className={`form-button ${events === "join" ? "active" : ""}`}
          onClick={() => setEvents("join")}
        >
          Join us
        </button>
      </section>

      <SwitchTransition>
        <CSSTransition key={events} timeout={300} classNames="fade">
          <div>{events === "contact" ? <ContactForm /> : <JoinForm />}</div>
        </CSSTransition>
      </SwitchTransition>

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3198706909969680"
        data-ad-slot="8799369227"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default FormContainer;
