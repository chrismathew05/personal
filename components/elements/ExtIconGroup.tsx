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
      className={styles.icon}
    >
      <FaGithub />
    </a>
    <a
      href={"https://ca.linkedin.com/in/chris-mathew-0bbb26128"}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.icon}
    >
      <FaLinkedin />
    </a>
    <a
      href={
        "https://drive.google.com/file/d/1dd2ZhVe1n-ZfaXHh2poGr6fNFk7ixm-U/view?usp=sharing"
      }
      target="_blank"
      rel="noopener noreferrer"
      className={styles.icon}
    >
      <FaFileAlt />
    </a>
    <a href={"mailto:chrismathew05@gmail.com"} className={styles.icon}>
      <FaEnvelope />
    </a>
  </h3>
);
