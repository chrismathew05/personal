import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { ExtIconGroup } from "../components/ExtIconGroup";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chris Mathew</title>
        <meta
          name="description"
          content="Chris Mathew Personal Website"
          key="desc"
        />
        <meta property="og:title" content="Chris Mathew" />
        <meta
          property="og:description"
          content="Chris Mathew Personal Website"
        />
        <meta property="og:image" content="/profile.png" />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.profile}>
          <Image
            src={"/profile.png"}
            layout="fill"
            objectFit="cover"
            alt="test"
          />
        </div>

        <h1 className={styles.title}>Chris Mathew</h1>

        <p className={styles.description}>
          Enthusiastic about the intersection of Data Science and Business.
        </p>
        <ExtIconGroup />

        <div className={styles.content}>
          <h2 id="about">
            <Link href="#about">
              <a className={styles.headerLink}>About</a>
            </Link>
          </h2>
          <div>
            <p>
              Authentic scenester activated charcoal banh mi kale chips cred
              unicorn, whatever ethical brunch mixtape cloud bread yr iceland.
              Jianbing keytar selvage, lyft knausgaard everyday carry iceland
              farm-to-table venmo poke. Coloring book single-origin coffee
              master cleanse unicorn seitan hella ascot. Tattooed try-hard
              occupy man braid church-key aesthetic. Truffaut migas flexitarian,
              neutra synth poutine cliche mumblecore vinyl chicharrones yuccie
              craft beer. Mixtape drinking vinegar ugh iPhone. La croix offal
              tattooed taiyaki you probably havent heard of them next level
              drinking vinegar hella aesthetic unicorn stumptown sustainable
              woke.
            </p>
          </div>

          <h2 id="projects">
            <Link href="#projects">
              <a className={styles.headerLink}>Projects</a>
            </Link>
          </h2>
          <div>
            <h3>Low-code PDF Extraction Tool</h3>
            <p>
              Authentic scenester activated charcoal banh mi kale chips cred
              unicorn, whatever ethical brunch mixtape cloud bread yr iceland.
              Jianbing keytar selvage, lyft knausgaard everyday carry iceland
              farm-to-table venmo poke. Coloring book single-origin coffee
              master cleanse unicorn seitan hella ascot. Tattooed try-hard
              occupy man braid church-key aesthetic. Truffaut migas flexitarian,
              neutra synth poutine cliche mumblecore vinyl chicharrones yuccie
              craft beer. Mixtape drinking vinegar ugh iPhone. La croix offal
              tattooed taiyaki you probably havent heard of them next level
              drinking vinegar hella aesthetic unicorn stumptown sustainable
              woke.
            </p>

            <h3>ERP System</h3>
            <h3>Stock Tracker</h3>
            <h3>ML Notebooks</h3>
            <h3>Other</h3>
          </div>

          <h2 id="experience">
            <Link href="#experience">
              <a className={styles.headerLink}>Experience</a>
            </Link>
          </h2>
          <div>
            <h3>Co-founder | Intelline Inc. | 2017 - 2022</h3>
            <h3>Staff Accountant | KPMG | 2017 - 2020</h3>
            <h3>Quant Developer | Scotiabank | S2016</h3>
          </div>

          <h2 id="education">
            <Link href="#education">
              <a className={styles.headerLink}>Education</a>
            </Link>
          </h2>
          <ul>
            <li>Bachelors of Mathematics (BMath), UWaterloo</li>
            <li>Masters of Accounting (MAcc), UWaterloo</li>
            <li>CPA Candidate (Passed CFE, experience pending)</li>
            <li>YC W19</li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/chrismathew05/personal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © 2022, Chris Mathew
        </a>
      </footer>
    </div>
  );
};

export default Home;
