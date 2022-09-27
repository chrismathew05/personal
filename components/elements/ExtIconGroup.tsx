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
    <a
      href={"https://ca.linkedin.com/in/chris-mathew-0bbb26128"}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.icon} ${styles.tooltip}`}
    >
      <FaLinkedin />
      <span className={styles.tooltiptext}>LinkedIn</span>
    </a>
    <a
      href={
        "https://drive.google.com/file/d/1B7z6TUku0dsetIBig7Lcm-LfNssj5PJI/view?usp=sharing"
      }
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.icon} ${styles.tooltip}`}
    >
      <FaFileAlt />
      <span className={styles.tooltiptext}>Resume</span>
    </a>
    <a
      href={"mailto:chrismathew05@gmail.com"}
      className={`${styles.icon} ${styles.tooltip}`}
    >
      <FaEnvelope />
      <span className={styles.tooltiptext}>Email</span>
    </a>
  </h3>
);
