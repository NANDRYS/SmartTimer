import React from "react";
import style from "../MainStyle/Input.module.css";

export const Input = ({ placeholder }) => {
  return (
    <input className={style["field"]} type="text" placeholder={placeholder} />
  );
};
