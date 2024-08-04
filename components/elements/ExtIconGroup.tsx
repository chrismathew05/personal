import React, { FunctionComponent } from "react";

import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from "react-icons/fa";

import styles from "../../styles/ExtIconGroup.module.css";

/**
 * Icon group containing external links
 */
export const ExtIconGroup: FunctionComponent = () => (
  <h3>
    <a
      href={"https://github.com/chrismathew05/"}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.icon} ${styles.tooltip}`}
    >
      <FaGithub />
      <span className={styles.tooltiptext}>Github</span>
    </a>
    {/* <a */}
    {/*   href={ */}
    {/*     "https://docs.google.com/document/d/1K9bFohkpZfcA_TmzRFO3uR3EWdA6aTV9wy_U_WTZkHY/edit?usp=sharing" */}
    {/*   } */}
    {/*   target="_blank" */}
    {/*   rel="noopener noreferrer" */}
    {/*   className={`${styles.icon} ${styles.tooltip}`} */}
    {/* > */}
    {/*   <FaFileAlt /> */}
    {/*   <span className={styles.tooltiptext}>Resume</span> */}
    {/* </a> */}
    <a
      href={"mailto:chrismathew05@gmail.com"}
      className={`${styles.icon} ${styles.tooltip}`}
    >
      <FaEnvelope />
      <span className={styles.tooltiptext}>Email</span>
    </a>
  </h3>
);
