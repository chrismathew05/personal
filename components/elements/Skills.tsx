import React, { FunctionComponent } from "react";

/**
 * Content for Skills section
 */
export const Skills: FunctionComponent = () => (
  <section>
    <h3>Data Science</h3>
    <ul>
      <li>
        Python (High)
        <ul>
          <li>
            Scikit-Learn, Pandas, Numpy, Scipy, Selenium, BeautifulSoup,
            Requests and much more.
          </li>
        </ul>
      </li>
      <li>Excel/VBA (High)</li>
      <li>SQL (High)</li>
      <li>
        Infra (Medium)
        <ul>
          <li>
            AWS (IAM, EventBridge, Lambda, S3, ECR), Docker, CockroachDB,
            MongoDB
          </li>
        </ul>
      </li>
      <li>
        Core Math (Medium)
        <ul>
          <li>Linear Algebra, Calculus, Frequentist + Bayesian Statistics</li>
        </ul>
      </li>
      <li>
        Supervised Learning (Medium)
        <ul>
          Linear/Logistic Regression, SVM, Decision Trees, SGD, KNeighbours,
          Regularization techniques (Ridge, Lasso, Elastic Net, Early Stopping),
          Ensemble methods (Random Forest, Bagging/Pasting, Boosting)
        </ul>
      </li>
      <li>Dimensionality Reduction/Unsupervised Learning (Low)</li>
      <li>Neural Networks/Deep Learning (Low)</li>
    </ul>

    <h3>Accounting/Business</h3>
    <ul>
      <li>Financial Reporting/Analysis: IFRS, ASPE (High)</li>
      <li>Canadian Corporate/Partnership Tax: T2/HST Returns, SRED (High)</li>
      <li>US Corporate/Partnership Tax (Medium)</li>
      <li>Canadian Personal Tax (Medium)</li>
      <li>US Personal Tax (Low)</li>
      <li>Audit - FI/SMB (Low)</li>
      <li>
        Other: Payroll, Bookeeping, Corporate Banking, Governance/HR (Medium)
      </li>
    </ul>

    <h3>Web Dev</h3>
    <ul>
      <li>Javascript/Typescript/HTML/CSS (Medium)</li>
      <li>React (Medium)</li>
      <li>Frameworks: NextJS (Medium), MeteorJS (Medium), Django (Low)</li>
    </ul>

    <p>
      I&apos;m currently working on strengthening my knowledge of ML/MLOps
      (Spark/Sagemaker) before tackling some of the datasets on Kaggle.
      Eventually, I want to use it in a full-scale project; I was thinking about
      using it to make buy/sell decisions in the Stock Project described below,
      but something else interesting may come up.
    </p>
  </section>
);
