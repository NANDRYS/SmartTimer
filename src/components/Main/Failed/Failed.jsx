import React from "react";
import style from "../../../assets/css/MainStyle/boxForList.module.css";
import failedStyle from "../../../assets/css/MainStyle/Failed.module.css";

export const Failed = ({ listItems, changeStatus }) => {
  return (
    <div className={[style["box"], failedStyle["failed"]].join(" ")}>
      <h2 className={[style["header"], failedStyle["header"]].join(" ")}>
        Failed
      </h2>
      <ol className={style["list"]}>
        {listItems
          .filter((e) => e.status === "failed")
          .map((item) => (
            <li key={item.id} style={{ position: "relative" }}>
              <a href="">{item.TaskName} </a>
              <a href="#" className={style["deleteButton"]}>
                <span
                  className={`material-icons ${style["red"]}`}
                  onClick={() => {
                    changeStatus(item.id, "delete");
                  }}
                >
                  close
                </span>
              </a>
            </li>
          ))}
      </ol>
    </div>
  );
};
