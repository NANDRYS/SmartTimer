import React from "react";
import style from "../../../assets/css/MainStyle/Input.module.css";

export const Input = ({ placeholder, name,value,setValue }) => {
  return (
    <input
      className={style["field"]}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e)=>setValue(e.target.value)}
    />
  );
};
