import React from "react";
import style from "../../../assets/css/MainStyle/boxForList.module.css";
import failedStyle from "../../../assets/css/MainStyle/Failed.module.css";

export const Failed = () => {
  return (
    <div className={[style["box"], failedStyle["failed"]].join(" ")}>
      <h2 className={[style["header"], failedStyle["header"]].join(" ")}>
        Failed
      </h2>
      <ol className={style["list"]}>
        <li>
          <a href="">Lorem ipsum dolor sit amet, consectetur adipisicing.</a>
        </li>
        <li>
          <a href="">Lorem ipsum dolor sit amet.</a>
        </li>
      </ol>
    </div>
  );
};
