import React from "react";
import style from "../../../assets/css/MainStyle/boxForList.module.css";
import compliteStyle from "../../../assets/css/MainStyle/Complited.module.css";

export const Complited = ({ listItems, changeStatus }) => {
  return (
    <div className={[style["box"], compliteStyle["completed"]].join(" ")}>
      <h2 className={[style["header"], compliteStyle["header"]].join(" ")}>
        Complited
      </h2>
      <ol className={style["list"]}>
        {listItems
          .filter((e) => e.status === "complited")
          .map((item) => (
            <li key={item.id} style={{ position: "relative" }}>
              <a href="#">
                {item.TaskName}
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
              </a>
            </li>
          ))}
      </ol>
    </div>
  );
};
