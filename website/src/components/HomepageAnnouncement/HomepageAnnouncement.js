import React from "react";

import clsx from "clsx";

import styles from "./HomepageAnnouncement.module.css";

const ANNOUNCEMENT =
  <>
    <h3>Coming Soon...</h3>
    <p>
      🚧 Language under construction.
    </p>
  </>;

export default function HomepageAnnouncement() {
  if (ANNOUNCEMENT !== "") {
    return (
      <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>{ANNOUNCEMENT}</div>
      </div>
    );
  } else return null;
}
