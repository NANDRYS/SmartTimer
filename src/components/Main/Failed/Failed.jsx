import React from "react";
import style from "../../../assets/css/MainStyle/boxForList.module.css";
import failedStyle from "../../../assets/css/MainStyle/Failed.module.css";

export const Failed = ({listItems}) => {
  return (
    <div className={[style["box"], failedStyle["failed"]].join(" ")}>
      <h2 className={[style["header"], failedStyle["header"]].join(" ")}>
        Failed
      </h2>
      <ol className={style["list"]}>
         {listItems
          .filter((e) => e.status === "failed")
          .map((item) => (
            <li key={item.id}>
              <a href="">{item.TaskName} </a>
            </li>
          ))}
      </ol>
    </div>
  );
};
