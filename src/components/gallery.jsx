import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galerie</h2>
          <p>
            Entdecken Sie eine Auswahl unserer beeindruckenden Projekte. Unser
            Portfolio zeigt eine Vielzahl von Bodenbelägen, die wir mit
            Leidenschaft und Präzision verlegt haben. Lassen Sie sich von der
            Vielfalt und Qualität unserer Arbeiten inspirieren.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Lädt..."}
          </div>
        </div>
      </div>
    </div>
  );
};
