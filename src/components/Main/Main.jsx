import React from "react";
import style from ".//MainStyle/Main.module.css";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";
import { Card } from "./Card/Card";
import { Complited } from "./Complited/Complited";
import { Failed } from "./Failed/Failed";

export const Main = () => {
  return (
    <main>
      <form action="#">
        <Input placeholder={"Enter the task"} />
        <Input placeholder={"Enter the time (in minutes)"} />
        <Button />
      </form>
      <div className={style["tasks_list"]}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={style["main__content"]}>
        <Complited className={style["first"]} />
        <Failed />
      </div>
    </main>
  );
};
