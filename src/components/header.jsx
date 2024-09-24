import React, { useEffect, useState } from "react";

export const Header = (props) => {
  const [backgroundPosition, setBackgroundPosition] = useState("0%");

  const handleScroll = () => {
    // Calculate the new background position based on scroll
    const scrollPosition = window.scrollY; // Get current scroll position
    const newPosition = `${scrollPosition * 0.2}px`; // Adjust factor as needed
    setBackgroundPosition(newPosition); // Update background position
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      style={{
        backgroundPosition: backgroundPosition,
        backgroundSize: "cover",
      }}
    >
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h1>
                {props.data ? props.data.title : "Loading"}
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              <a href="#features" className="btn btn-custom btn-lg page-scroll">
                Erfahre Mehr
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
