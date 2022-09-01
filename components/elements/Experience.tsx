import React, { FunctionComponent } from "react";

import { ExtLinks } from "../utility/ExtLinks";

/**
 * Content for Experience section
 */
export const Experience: FunctionComponent = () => (
  <section>
    <div>
      <h3 style={{ marginBottom: "0px" }}>
        Co-founder | Intelline Inc. | 2017 - 2022
      </h3>
      <ExtLinks
        extLinks={[
          "https://www.intelline.ca/",
          "https://www.ycombinator.com/companies/intelline",
        ]}
        labels={["Company Website", "YC Page"]}
        keyId="intelline"
      />
      <ul>
        <li>
          Intelline builds ultra-efficient industrial generators that can run on
          any fuel type.
        </li>
        <li>
          Core Team: myself (CFO),{" "}
          <a
            href="https://ca.linkedin.com/in/jryoung1995"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "skyblue" }}
          >
            Jason Young
          </a>{" "}
          (CTO), and{" "}
          <a
            href="https://ca.linkedin.com/in/kyle-faller-272b42109"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "skyblue" }}
          >
            Kyle Faller
          </a>{" "}
          (CEO)
        </li>
        <li>
          Company Highlights (at time of writing):
          <ul>
            <li>
              Accepted into{" "}
              <a
                style={{ color: "skyblue" }}
                href="https://www.ycombinator.com/"
              >
                YCombinator&apos;s
              </a>{" "}
              W19 batch
            </li>
            <li>Raised 1.5M+ USD in dilutive/non-dilutive funding</li>
            <li>Set up facility in Waterloo, Ontario</li>
            <li>Completed build of in-house engine test cell</li>
            <li>Successfully tested custom piston-mounted valvetrain</li>
            <li>Completed design/fabrication of custom engine block</li>
            <li>Hired/on-boarded several co-ops</li>
          </ul>
        </li>
        <li></li>
      </ul>

      <h3>Staff Accountant | KPMG | 2017 - 2020</h3>
      <h3>Quant Developer | Scotiabank | S2016</h3>
    </div>
  </section>
);
