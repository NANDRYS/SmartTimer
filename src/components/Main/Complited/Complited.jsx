import React from "react";
import style from "../../../assets/css/MainStyle/boxForList.module.css";
import compliteStyle from "../../../assets/css/MainStyle/Complited.module.css";

export const Complited = ({listItems}) => {
  return (
    <div className={[style["box"], compliteStyle["completed"]].join(" ")}>
      <h2 className={[style["header"], compliteStyle["header"]].join(" ")}>
        Complited
      </h2>
      <ol className={style["list"]}>
        {listItems
          .filter((e) => e.status === "complited")
          .map((item) => (
            <li key={item.id}>
              <a href="">{item.TaskName} </a>
            </li>
          ))}
      </ol>
    </div>
  );
};
