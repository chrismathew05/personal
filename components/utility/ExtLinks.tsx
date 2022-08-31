import React, { FunctionComponent } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

import styles from "../../styles/ExtLinks.module.css";

type ExtLinksProps = {
  extLinks: string[];
  labels: string[];
  keyId: string;
};

/**
 * Utility component to help group external links into subheading
 */
export const ExtLinks: FunctionComponent<ExtLinksProps> = ({
  extLinks,
  labels,
  keyId,
}) => (
  <div>
    {extLinks.map((link, idx) => (
      <span key={`${keyId}-${idx}`}>
        <a
          className={styles.extLink}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {labels[idx]} <FaExternalLinkAlt />
        </a>
        {idx == extLinks.length - 1 ? "" : " / "}
      </span>
    ))}
  </div>
);
