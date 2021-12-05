import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Link from "@docusaurus/Link";

// import useBaseUrl from "@docusaurus/useBaseUrl";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import clsx from "clsx";

import {
  HomepageAnnouncement,
  HomepageFeatures,
  Space,
  HomepageTyping,
} from "../components"

import styles from "./index.module.css";

function HomepageHeader() {

  const {
    siteConfig: {
      customFields: { description, firebaseConfig },
      tagline,
    },
  } = useDocusaurusContext();


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  let user = auth.currentUser;
  onAuthStateChanged(auth, user => {
    if (!!user) {
      let url = `url(${user.photoURL || `"https://avatars.dicebear.com/api/jdenticon/${user.displayName}.svg"`})`;
      document.documentElement.style.setProperty("--pp-url", url);
      // document.getElementsByClassName("header-profile")[0].setAttribute("style", `--pp-url: url(${user.photoURL || `https://avatars.dicebear.com/api/jdenticon/${user.displayName}.svg`})`);
      console.log(url);
    }
  })

  return (
    <header className={clsx("", styles.hero)}>
      <Space />
      <div className={clsx("", styles.heroInner)}>
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
