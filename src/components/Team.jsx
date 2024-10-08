import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Unser Team</h2>
          <p>
            Lernen Sie die Experten kennen, die hinter den hochwertigen
            Bodenbelägen stehen. Unser Team besteht aus erfahrenen Fachleuten,
            die mit Leidenschaft und Expertise für Sie arbeiten. Hier stellen
            wir Ihnen unsere talentierten Mitarbeiter vor.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    <img src={d.img} alt={d.name} className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "Lädt..."}
        </div>
      </div>
    </div>
  );
};
