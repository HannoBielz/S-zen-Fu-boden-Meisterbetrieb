import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Unsere Produkte</h2>
          <p>
            Gerne beraten wir Sie vor Ort, um die besten Lösungen für Ihre
            Bodenprojekte zu finden.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-6 col-md-3">
                  <i className={d.icon}></i>
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Lädt..."}
        </div>
      </div>
    </div>
  );
};
