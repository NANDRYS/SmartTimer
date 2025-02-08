import React from "react";
import style from "../../../assets/css/MainStyle/Input.module.css";

export const Input = ({ placeholder }) => {
  console.log('//');
  
  return (
    <input className={style["field"]} type="text" placeholder={placeholder} />
  );
};
