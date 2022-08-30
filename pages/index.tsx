import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { TOC } from "../components/TOC";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
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
        {/* Profile Pic */}
        <div className={styles.profile}>
          <Image
            src={"/profile.png"}
            layout="fill"
            objectFit="cover"
            alt="test"
          />
        </div>

        {/* Header */}
        <h1 className={styles.title}>Chris Mathew</h1>
        <p className={styles.description}>
          Enthusiastic about the intersection of Data Science and Business.
        </p>
        <ExtIconGroup />

        <div className={styles.row}>
          <div className={styles.smallCol}>
            <TOC />
          </div>

          {/* Content */}
          <div className={styles.bigCol}>
            <h2 id="about">
              <Link href="#about">
                <a className={styles.headerLink}>About</a>
              </Link>
            </h2>
            <About />

            <h2 id="projects">
              <Link href="#projects">
                <a className={styles.headerLink}>Projects</a>
              </Link>
            </h2>
            <Projects />

            <h2 id="experience">
              <Link href="#experience">
                <a className={styles.headerLink}>Experience</a>
              </Link>
            </h2>
            <Experience />

            <h2 id="education">
              <Link href="#education">
                <a className={styles.headerLink}>Education</a>
              </Link>
            </h2>
            <Education />
          </div>
        </div>
      </main>

      {/* Footer */}
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
