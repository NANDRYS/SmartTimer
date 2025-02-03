import React from "react";
import style from './Main.module.css'

export const Main = () => {
  return (
    <main>
      <form action="#">
        <input type="text" placeholder="Введите задачу" />
        <input type="text" placeholder="Введите время (в минутах)" />
        <button style={{ color: "black" }}>Created</button>
      </form>
      <div className="status bar">
        <span>Название задачи!</span>
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
    </main>
  );
};
