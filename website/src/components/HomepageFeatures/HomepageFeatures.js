import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../../static/img/undraw_programming.svg").default,
    description: (
      <>
        With Raj Lang anyone can programme in any language without actually
        knowing them. It is a multi-purpose and easy to use programming
        language.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("../../../static/img/undraw_dev_focus.svg").default,
    description: (
      <>
        With Raj Lang, you can focus on what matters. You don't have to learn a
        new language for features. You can focus on the important parts of the
        project.
      </>
    ),
  },
  {
    title: "Feel at Home",
    Svg: require("../../../static/img/undraw_relaxing_at_home.svg").default,
    description: (
      <>
        We made the syntax as much comfortable and easy to use as possible. The
        syntax is predominantly inspired from the easiest languages to learn
        (JavaScript and Python).
      </>
    ),
  },
  {
    title: "Performance out of the box",
    Svg: require("../../../static/img/undraw_to_the_stars.svg").default,
    description: (
      <>
        Performance is the top priority for us. Raj Lang is Fast and Efficient.
        You need not to write an efficient code out compiler only gives you the
        most performant code.
      </>
    ),
  },
  {
    title: "Maintainable",
    Svg: require("../../../static/img/undraw_maintenance.svg").default,
    description: (
      <>
        We know how important it is to keep our code clean and readable. The
        final programme must be maintainable for decades. Raj Lang is Clean and
        Readable.
      </>
    ),
  },
  {
    title: "Completely Open Source",
    Svg: require("../../../static/img/undraw_open_source.svg").default,
    description: (
      <>
        100% open-sourced and made with ❤️. Raj Lang is MIT licensed. You can
        contribute to the project on GitHub. You can use it with your own
        projects or just enjoy it.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4 margin-vert--lg")}>
      <Svg className={clsx(styles.featureImage)} alt={title} />
      <h2 className={clsx(styles.featureHeading)}>{title}</h2>
      <p className="padding-horiz--lg">{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx(styles.features)}>
      <div className="container text--center">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
