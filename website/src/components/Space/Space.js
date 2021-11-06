import React from "react";

import clsx from "clsx";

import styles from "./Space.module.css";

export default function Space() {
    return (
        <>
            <div className={clsx("", styles.stars, styles.space)}></div>
            <div className={clsx("", styles.twinkling, styles.space)}></div>
            <div className={clsx("", styles.clouds, styles.space)}></div>
        </>
    );
}
