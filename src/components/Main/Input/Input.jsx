import React from "react";
import style from "../../../assets/css/MainStyle/Input.module.css";

export const Input = ({ placeholder, name }) => {  
  return (
    <input className={style["field"]} type="text" name={name} placeholder={placeholder} />
  );
};
