import React, { FunctionComponent } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import styles from "../../styles/Projects.module.css";

/**
 * Content for Projects section
 */
export const Projects: FunctionComponent = () => (
  <section>
    <h3 style={{ margin: "0px" }}>Low-code PDF Extraction Tool</h3>
    <div>
      <a
        className={styles.extLink}
        href="https://od.meteorapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Website <FaExternalLinkAlt />
      </a>{" "}
      /
      <a className={styles.extLink}>
        Github <FaExternalLinkAlt />
      </a>{" "}
      /
      <a className={styles.extLink}>
        {" "}
        Demo <FaExternalLinkAlt />
      </a>
    </div>

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
