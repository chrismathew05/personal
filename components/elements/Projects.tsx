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
      keyId="pdflow"
    />

    <p>
      &quot;Pdflow&quot; is a low-code solution to extract text from fixed
      positions within PDF files. When I was a Staff Accountant at KPMG, I built
      several VBA programs that involved reading text from PDF documents
      (partnership returns, corporate documents, etc.); thus, I finally decided
      to build a tool that would help simplify the process of building
      extraction sequences itself. The web app for Pdflow is built using
      MeteorJS + React. AWS Lambda is used to partition large extraction jobs.
      Text extraction is performed via the Tesseract OCR Engine.
    </p>

    <h3>ERP System</h3>
    <h3>Stock Tracker</h3>
    <h3>ML Notebooks</h3>
    <h3>Other</h3>
  </section>
);
