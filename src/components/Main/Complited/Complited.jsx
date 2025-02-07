import React from "react";
import style from "../MainStyle/boxForList.module.css";
import compliteStyle from "../MainStyle/Complited.module.css";

export const Complited = () => {
  return (
    <div className={[style["box"], compliteStyle["completed"]].join(" ")}>
      <h2 className={[style["header"], compliteStyle['header']].join(" ")}>Complited</h2>
      <ol className={style["list"]}>
        <li>
          <a href="">Lorem ipsum dolor sit amet consectetur. </a>
        </li>
      </ol>
    </div>
  );
};
