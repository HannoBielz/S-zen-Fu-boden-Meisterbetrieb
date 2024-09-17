import React from "react";
import { ElfsightWidget } from "react-elfsight-widget"; // Import the Elfsight widget
import "../App.css";

export const Testimonials = () => {
  const widgetId = "6e9c948c-7df1-4839-9f0d-8a9792a9ffca"; // Your Elfsight widget ID

  return (
    <div id="testimonials" style={{ marginBottom: "0", paddingBottom: "0" }}>
      <div className="container">
        <div className="section-title text-center">
          <h2>Was unsere Kunden sagen</h2>
        </div>
        <div className="row">
          {/* Render the Elfsight widget */}
          <div className="col-md-12">
            <ElfsightWidget widgetId={widgetId} />
          </div>
        </div>
      </div>
    </div>
  );
};
