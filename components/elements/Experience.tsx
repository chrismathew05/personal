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
          Core Team: myself (CFO),
          <a
            href="https://ca.linkedin.com/in/jryoung1995"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "skyblue" }}
          >
            {" Jason Young "}
          </a>
          (CTO), and
          <a
            href="https://ca.linkedin.com/in/kyle-faller-272b42109"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "skyblue" }}
          >
            {" Kyle Faller "}
          </a>
          (CEO)
        </li>
        <li>
          Company Highlights (at time of writing):
          <ul>
            <li>
              Accepted into
              <a
                href="https://www.ycombinator.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "skyblue" }}
              >
                {" YCombinator's "}
              </a>
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
        <li>
          Responsible for the following:
          <ul>
            <li>
              <i>Financial Reporting: </i>design + implement financial controls,
              set up company chart of accounts + policies, perform day-to-day
              JEs + adjusting JEs at period end, prepare FS per ASPE and US GAAP
            </li>
            <li>
              <i>Tax Reporting and Planning: </i>prepare T2 Return for CCPC,
              Delware Franchise Tax Return/1120 Return for US entity, prepare
              HST and T4 Information Returns, set up intercompany fee mechanism
              to ensure compliance with transfer pricing guidelines, prepare
              T661 for SRED
            </li>
            <li>
              <i>Banking and Finance: </i>prepare &quot;data room&quot; for
              govt/VC/angels, set up CAD/USD chequing + credit facilities, cash
              flow management, monthly budgeting
            </li>
            <li>
              <i>Strategy and Governance: </i>set up company admin/IT infra,
              building IP/rollout strategy, contribute to mission, vision,
              values
            </li>
            <li>
              <i>HR Management: </i>develop Health and Safety Policy and
              Program, assist in hiring/onboarding procedures
            </li>
          </ul>
        </li>
      </ul>

      <h3>Staff Accountant | KPMG | 2017 - 2020</h3>
      <ul>
        <li>
          Prepared working papers and corporate tax returns (US 1120, 1120-F,
          1065, state returns, etc.)
        </li>
      </ul>

      <h3>Quant Developer | Scotiabank | S2016</h3>
      <ul>
        <li>
          Created Strategy Code Generator using Excel VBA and Dynamic Data
          Exchange (DDE) functions that allowed trading team to quickly add
          strategy tags to Bloomberg for the team to book trades under
        </li>
      </ul>
    </div>
  </section>
);
