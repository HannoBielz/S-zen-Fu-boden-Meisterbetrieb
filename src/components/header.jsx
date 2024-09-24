import React, { useEffect, useState } from "react";

export const Header = (props) => {
  const [backgroundSize, setBackgroundSize] = useState("cover");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Calculate the new background size based on the scroll position
    const newSize = Math.max(100, 200 + scrollPosition / 2); // Adjust the divisor to control the scaling speed
    setBackgroundSize(`${newSize}%`); // Update the background size
  };

  useEffect(() => {
    // Scroll-Event-Listener hinzufügen
    window.addEventListener("scroll", handleScroll);

    // Cleanup-Funktion zum Entfernen des Event-Listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      style={{
        backgroundSize: backgroundSize, // Hintergrundgröße wird dynamisch gesetzt
        backgroundPosition: "center", // Bild zentrieren
        backgroundRepeat: "no-repeat", // Bild nicht wiederholen
      }}
    >
      <div className="overlay" style={{ pointerEvents: "none" }}></div>{" "}
      {/* Overlay hinzufügen */}
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 intro-text">
            <h1>
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
            <a
              href="#features"
              className="btn btn-custom btn-lg page-scroll"
              style={{ zIndex: 1 }}
            >
              Erfahre Mehr
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
