import React, { FunctionComponent } from "react";

import { ExtLinks } from "../utility/ExtLinks";

import styles from "../../styles/Projects.module.css";

/**
 * Content for Projects section
 */
export const Projects: FunctionComponent = () => (
  <section>
    <h3 style={{ margin: "0px" }}>Low-code PDF Text Extraction Tool</h3>
    <ExtLinks
      extLinks={["https://od.meteorapp.com/", "#", "#"]}
      labels={["Website", "Github", "Demo"]}
    />

    <p>
      <a
        href="https://od.meteorapp.com/pdflow"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "royalblue" }}
      >
        Pdflow
      </a>{" "}
      is a low-code solution for extracting information from PDFs.
    </p>

    <h3>ERP System</h3>
    <h3>Stock Tracker</h3>
    <h3>ML Notebooks</h3>
    <h3>Other</h3>
  </section>
);
