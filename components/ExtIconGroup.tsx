import React, { FunctionComponent } from "react";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from "react-icons/fa";

/**
 * Icon group containing external links
 */
export const ExtIconGroup: FunctionComponent = () => {
  return (
    <h3 className="icon">
      <a
        href={"https://github.com/chrismathew05/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href={"https://github.com/chrismathew05/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href={"https://github.com/chrismathew05/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFileAlt />
      </a>
      <a href={"mailto:chrismathew05@gmail.com"}>
        <FaEnvelope />
      </a>
    </h3>
  );
};
