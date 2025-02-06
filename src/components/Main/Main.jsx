import React from "react";
import style from "./Main.module.css";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";
import { StatusBar } from "./StatusBar/StatusBar";
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
      <div className={style["main__content"]}>
        <StatusBar />
        <Complited className={style ['first']} />
        <Failed />
      </div>
    </main>
  );
};
