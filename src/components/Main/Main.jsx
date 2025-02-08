import React, { useState } from "react";
import style from "../../assets/css/MainStyle/Main.module.css";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";
import { Card } from "./Card/Card";
import { Complited } from "./Complited/Complited";
import { Failed } from "./Failed/Failed";

const statusList = {
  active: "active",
  complited: "complited",
  failed: "failed",
};
const LIST = [
  {
    id: 1,
    TaskName: "прочитать книгу",
    time: 180,
    isPlaying: true,
    status: statusList.active,
  },
];

export const Main = () => {
  const [listItems, setListItems] = useState(LIST);

  const getItemFromForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    if (isNaN(formProps.TaskTime)) {
      formProps.TaskTime = Number(formProps.TaskTime);
      if (isNaN(formProps.TaskTime)) {
        alert("Вы ввели не число");
      }
    }

    if (formProps.TaskTime === "") return alert("field  TaskTime is empty");
    if (formProps.TaskName === "") return alert("field TaskName  is empty");

    if (!isNaN(formProps.TaskTime) && isNaN(formProps.TaskName)) {
      setListItems((oldItems) => [
        ...oldItems,
        {
          TaskName: formProps.TaskName,
          time: formProps.TaskTime,
          isPlaying: true,
          status: statusList.active,
          id: Math.max(...oldItems.map((i) => (i = i.id))) + 1,
        },
      ]);
    }
  };
  return (
    <main>
      <form onSubmit={getItemFromForm}>
        <Input name={"TaskName"} placeholder={"Enter the task"} />
        <Input name={"TaskTime"} placeholder={"Enter the time (in minutes)"} />
        <Button />
      </form>
      <div className={style["tasks_list"]}>
        {listItems
          .filter((e) => e.status === "active")
          .map((item) => (
            <Card item={item} key={item.id} />
          ))}
      </div>
      <div className={style["main__content"]}>
        <Complited />
        <Failed />
      </div>
    </main>
  );
};
