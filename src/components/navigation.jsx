import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Navigation umschalten</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Süzen Fußboden
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                Über Uns
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Dienstleistungen
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galerie
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Bewertungen
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
