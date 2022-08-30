import React, { FunctionComponent } from "react";
import Link from "next/link";

import styles from "../styles/TOC.module.css";

/**
 * Floating table of contents
 */
export const TOC: FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <b>Jump to:</b>
      <ul>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#experience">Experience</Link>
        </li>
        <li>
          <Link href="#education">Education</Link>
        </li>
      </ul>
    </nav>
  );
};
