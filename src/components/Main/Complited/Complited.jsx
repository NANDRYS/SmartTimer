import React from "react";
import style from "./Complited.module.css";

export const Complited = () => {
  return (
    <div className={style["completed"]}>
      <h2 className={style['header']}>Complited</h2>
      <ol className={style['list']}>
       <li><a href="">Читать asdas asdas asdas asdas asdas </a></li>
       <li><a href="">Читать asdas asdas asdas asdas asdas </a></li>
       <li><a href="">Читать asdas asdas asdas asdas asdas </a></li>
       <li><a href="">Читать asdas asdas asdas asdas asdas </a></li>
       <li><a href="">Читать asdas asdas asdas asdas asdas </a></li>
       <li><a href="">Читать asdas asdas asdas asdas asdas </a></li>
      </ol>
    </div>
  );
};
