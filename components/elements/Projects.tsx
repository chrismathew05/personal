import React, { FunctionComponent } from "react";
import Image from "next/image";

import { ExtLinks } from "../utility/ExtLinks";
import { Pills } from "../utility/Pills";

import pcFlow from "../../public/pc-flow.png";
import pdflow from "../../public/pdflow.gif";
import gourd from "../../public/gourd.gif";

/**
 * Content for Projects section
 */
export const Projects: FunctionComponent = () => (
  <section>
    <h3 id="pdflow" style={{ marginBottom: "0px" }}>
      Low-code PDF Extraction
    </h3>
    <ExtLinks
      extLinks={[
        "https://od.meteorapp.com/pdflow",
        "https://od.meteorapp.com/developer",
        "https://www.youtube.com/watch?v=4EGWN8SdcyE&list=PLJD5A0Xn9q_mJQtCAhv0YSUCJjO0iDq_d&ab_channel=0verdriveConnect",
      ]}
      labels={["Website", "API", "Demo"]}
      keyId="pdflow"
    />
    <p>
      &quot;Pdflow&quot; is a low-code solution to build text extraction
      sequences for PDF files. When I was a Staff Accountant at KPMG, I built
      several VBA programs that involved reading text from PDF documents
      (partnership returns, corporate documents, etc.); I finally decided to
      build a tool that would help simplify the process of building the
      extraction sequence itself.
    </p>
    <p>
      The web app for Pdflow is built using MeteorJS + React. AWS Lambda is used
      to partition large extraction jobs. Text extraction is performed via the
      Tesseract OCR Engine. Image pre-processing (grayscale, otsu threshold) is
      used to improve the accuracy of the extraction. Developers can also
      utilize the Pdflow API to integrate flows into their own apps. To
      accomodate Tesseract, I built a Docker image which gets uploaded to AWS
      ECR and then deployed to Lambda.
    </p>
    <p>
      Pdflow has over 50 users consisting of students, educators, business
      owners and civic data analysts. Although Stripe integration is included in
      the app, my users seem more than happy making use of my generous free tier
      🥲.
    </p>
    <Image
      src={pdflow}
      alt="pdflow"
      placeholder="blur"
      blurDataURL="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
    />
    <Pills
      labels={[
        "Javascript",
        "Meteor",
        "React",
        "MongoDB",
        "AWS",
        "Docker",
        "Python",
        "Tesseract",
        "Stripe",
      ]}
      keyId="pdflow-skills"
    />

    <h3 id="gourd" style={{ marginBottom: "0px" }}>
      ERP System
    </h3>
    <ExtLinks
      extLinks={[
        "https://gourd.herokuapp.com/",
        "https://github.com/chrismathew05/gourd-copy",
        "https://drive.google.com/file/d/1RbCSGZnpZr2AcinbSDQj7DFCFxUExxyG/view?usp=sharing",
      ]}
      labels={["Website", "Github", "Report"]}
      keyId="pdflow"
    />
    <p>
      &quot;Gourd&quot; was built by me as an internal ERP system for our
      start-up, Intelline, before transitioning to Quickbooks. While most sane
      people would have used an existing ERP application to run their business,
      I was determined to improve my web dev skills while building an useful,
      tailored internal tool for our company.
    </p>
    <p>
      Gourd includes modules for: recording/tracking tasks, expenditure
      management, accounting and budgeting. It also has integrations with
      Tableau (analysis) and Google Drive (uploading/downloading supporting
      documentation).
    </p>
    <Image
      src={gourd}
      alt="gourd"
      placeholder="blur"
      blurDataURL="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
    />
    <Pills
      labels={[
        "Javascript",
        "Meteor",
        "React",
        "MongoDB",
        "GDrive",
        "Tableau",
        "Heroku",
      ]}
      keyId="pdflow-skills"
    />

    <h3 id="stock" style={{ marginBottom: "0px" }}>
      Stock Project
    </h3>
    <ExtLinks
      extLinks={[
        "https://github.com/chrismathew05/pc-copy",
        "https://drive.google.com/file/d/1jU5aN5QjHRmMWUdcc205B8iX-svi8xGZ/view?usp=sharing",
      ]}
      labels={["Github", "Docs"]}
      keyId="stock"
    />
    <p>
      I started this project with my friend{" "}
      <a
        href="https://ca.linkedin.com/in/tobiaspushparajah"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "skyblue" }}
      >
        Tobias
      </a>{" "}
      after listening to a lecture at UW about stock price reactions to earnings
      releases. This project scrapes various sources (Yahoo Finance, Tipranks,
      Questrade, etc.) and tracks daily/intraday metrics on stocks from the
      following markets: CSE, TSX, TSXV, NASDAQ, NYSE. A scoring algorithm is
      continuously run, sending us notifications of what to buy/sell.
    </p>
    <p>
      The scoring algorithm is quite naive at the moment. I am considering using
      a supervised learning algorithm (likely an ensemble) to help build a model
      between the metrics I track and stock performance.
    </p>
    <p>
      As this is a private project, I am limited in what I can share. Below is
      an architecture chart to give you an idea about how it works; I have also
      provided links to a repo with a very small section of the source code and
      a cropped screenshot of our documentation in Sphinx.
    </p>
    <Image src={pcFlow} alt="pc-flow" placeholder="blur" />
    <Pills
      labels={[
        "Typescript",
        "NextJS",
        "React",
        "CockroachDB",
        "SQL",
        "AWS",
        "Docker",
        "Python",
        "Numpy",
        "Pandas",
        "Selenium",
        "Requests",
        "Bash",
      ]}
      keyId="pdflow-skills"
    />

    <h3 style={{ marginBottom: "0px" }}>ML Projects</h3>
    <ExtLinks
      extLinks={[
        "https://drive.google.com/drive/folders/1o2KlNyhoPzoZ2nnxFbqTUUp2f-XpbjxE?usp=sharing",
        "https://drive.google.com/drive/folders/1p8OreUP8v2dYBS7LJER4lYQisvSF5Pce?usp=sharing",
      ]}
      labels={["Full Projects", "Bayesian Stats"]}
      keyId="pdflow"
    />
    <p>
      I have linked a few Colab notebooks above containing ML projects I&apos;ve
      worked on/learnings. I&apos;ll continue to add to this repository over
      time.
    </p>
    <ul>
      <li>
        Housing Regression: predict median house values in California districts
      </li>
      <li>MNIST Classifier: accurately classify digits from MNIST dataset</li>
      <li>
        Moons Classifier: grow a Random Forest using an ensemble of Decision
        Trees
      </li>
    </ul>
    <Pills
      labels={[
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-Learn",
        "Scipy",
        "ML",
        "Stats",
      ]}
      keyId="pdflow-skills"
    />

    <h3>Other</h3>
    <ul>
      <li>
        <a
          href="https://od.meteorapp.com/pdflooper"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "skyblue" }}
        >
          Pdflooper:
        </a>{" "}
        Automates batch PDF page insertion/deletion/replacement (
        <a
          href="https://www.youtube.com/watch?v=ypB1Cb65xeg&ab_channel=0verdriveConnect"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "skyblue" }}
        >
          demo
        </a>
        )
      </li>
      <li>
        <a
          href="https://github.com/chrismathew05/autorun"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "skyblue" }}
        >
          Autorun:
        </a>{" "}
        Send jobs to a remote computer without having to set up a server
      </li>
      <li>
        <a
          href="https://github.com/chrismathew05/cir"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "skyblue" }}
        >
          Cir:
        </a>{" "}
        Tool to document/explore graph relations between circuit components.
      </li>
      <li>
        <a
          href="https://github.com/chrismathew05/personal"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "skyblue" }}
        >
          This Website:
        </a>{" "}
        built with NextJS, React, Typescript
      </li>
    </ul>
  </section>
);
