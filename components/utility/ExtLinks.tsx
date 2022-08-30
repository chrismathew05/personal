import React, { FunctionComponent } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

import styles from "../../styles/ExtLinks.module.css";

type ExtLinksProps = {
  extLinks: string[];
  labels: string[];
};

/**
 * Utility component to help group external links into subheading
 */
export const ExtLinks: FunctionComponent<ExtLinksProps> = ({
  extLinks,
  labels,
}) => (
  <div>
    {extLinks.map((link, idx) => {
      return (
        <>
          <a
            key={``}
            className={styles.extLink}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels[idx]} <FaExternalLinkAlt />
          </a>
          {idx == extLinks.length - 1 ? "" : " / "}
        </>
      );
    })}
  </div>
);
