import React from "react";
import style from "./StatusBar.module.css";

export const StatusBar = () => {
  return (
    <div className={style["status__bar"]}>
      <h2 className={style["header"]}>Название задачи!</h2>
      <span> круговой таймер</span>
      <div className="controllers ">
        <i>
          <a href="#">галочка</a>
        </i>
        <i>
          <a href="#">Пауза/плей</a>
        </i>
        <i>
          <a href="#">крестик</a>
        </i>
      </div>
    </div>
  );
};
