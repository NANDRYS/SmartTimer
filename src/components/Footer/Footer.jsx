import React from "react";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className="tasks">
      <div className="completed">
        <h2>Выполненные</h2>
        <p className="task"></p>
      </div>
      <div className="failed">
        <h2>Проваленные</h2>
        <p className="task">Найти клад</p>
        <p className="task">читать книгу</p>
      </div>
    </footer>
  );
};
