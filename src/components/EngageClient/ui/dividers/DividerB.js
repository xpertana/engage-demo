import React from "react";
import styles from "./DividerB.module.css";

export default function ElemLoading(props) {
  const { text, color = "#ddd" } = props;
  return (
    <div class={styles.wrapper}>
      <div class={styles.divider} styles={{ backgroundColor: "#292929" }}></div>
    </div>
  );
}
