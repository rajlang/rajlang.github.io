import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Link from "@docusaurus/Link";

import useBaseUrl from "@docusaurus/useBaseUrl";

import clsx from "clsx";

import {
  HomepageAnnouncement,
  HomepageFeatures,
  Space,
  HomepageTyping
} from "../components"

import styles from "./index.module.css";


function HomepageHeader() {

  const {
    siteConfig: {
      customFields: { description },
      tagline,
    },
  } = useDocusaurusContext();

  return (
    <header className={clsx("", styles.hero)}>
      <Space />
      <div className={clsx("" ,styles.heroInner)}>
        <h1 className={styles.heroProjectTagline}>
          {/* <img
            alt=""
            className={styles.heroLogo}
            src={useBaseUrl("/img/docusaurus.png")}
          /> */}
          <div className={clsx("", styles.heroCode)}>
          <HomepageTyping />
          </div>
          <span className={styles.heroTitleTextHtml}>
            <b>Modern</b>, programming language that can be <b>compiled</b> to
            many languages
          </span>
        </h1>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="/docs/intro">
            Tutorial - 5min ⏱️
          </Link>
          <Link className="button button--info" to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {

  const {
    siteConfig: {
      customFields: { description },
      tagline,
    },
  } = useDocusaurusContext();

  return (
    <Layout title={tagline} description={description}>
      <main>
        <HomepageHeader />
        <HomepageAnnouncement />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
