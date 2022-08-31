import React, { FunctionComponent } from "react";

import { ExtLinks } from "../utility/ExtLinks";
import { Pills } from "../utility/Pills";

/**
 * Content for Projects section
 */
export const Projects: FunctionComponent = () => (
  <section>
    <h3 style={{ margin: "0px" }}>Low-code PDF Text Extraction Tool</h3>
    <ExtLinks
      extLinks={[
        "https://od.meteorapp.com/",
        "https://od.meteorapp.com/developer",
        "#",
        "#",
      ]}
      labels={["Website", "API", "Github", "Demo"]}
      keyId="pdflow"
    />

    <p>
      &quot;Pdflow&quot; is a low-code solution to extract text from PDF files.
      When I was a Staff Accountant at KPMG, I built several VBA programs that
      involved reading text from PDF documents (partnership returns, corporate
      documents, etc.); I finally decided to build a tool that would help
      simplify the process of building the extraction sequence itself.
    </p>
    <p>
      The web app for Pdflow is built using MeteorJS + React. AWS Lambda is used
      to partition large extraction jobs. Text extraction is performed via the
      Tesseract OCR Engine. Image pre-processing (grayscale, otsu threshold) is
      used to improve the accuracy of the extraction. Developers can also
      utilize the Pdflow API to integrate flows into their own apps.
    </p>
    <p>
      Pdflow is used by over 50 users consisting of students, educators,
      business owners and civic data analysts. Although Stripe integration is
      included in the app, my users seem more than happy making use of my
      generous free tier 🥲.
    </p>
    <Pills
      labels={[
        "Javascript",
        "Meteor",
        "React",
        "AWS Lambda",
        "Python",
        "Tesseract OCR",
        "Numpy",
        "Stripe",
      ]}
      keyId="pdflow-skills"
    />

    <h3>ERP System</h3>
    <h3>Stock Tracker</h3>
    <h3>ML Notebooks</h3>
    <h3>Other</h3>
  </section>
);
