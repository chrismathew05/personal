import React, { FunctionComponent } from "react";

import styles from "../../styles/Pills.module.css";

type PillsProps = {
  labels: string[];
  keyId: string;
};

/**
 * Utility component to generate group of pills
 */
export const Pills: FunctionComponent<PillsProps> = ({ labels, keyId }) => (
  <>
    {labels.map((label, idx) => (
      <span className={styles.pill} key={`${keyId}-${idx}`}>
        {label}
      </span>
    ))}
  </>
);
