import React, { useEffect, useState } from "react";
import style from "../../assets/css/MainStyle/Main.module.css";
import { Input } from "./Input/Input";
import { Button } from "./Button/Button";
import { Card } from "./Card/Card";
import { Complited } from "./Complited/Complited";
import { Failed } from "./Failed/Failed";

export const Main = () => {
  const [listItems, setListItems] = useState([]);
  const [TaskName, setTaskName] = useState("");
  const [TaskTime, setTaskTime] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      setListItems(data.map((item) => ({ ...item })));
    }
  }, []);
  useEffect(() => {
    if (listItems.length) {
      localStorage.setItem("data", JSON.stringify(listItems));
    }
  }, [listItems]);

  const changeStatus = (id, newStatus) => {
    if (newStatus === "delete") {
      const updatedList = listItems.filter((el) => el.id != id);
      setListItems(updatedList);
    } else {
      const updatedList = listItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: newStatus,
          };
        }
        return item;
      });
      setListItems(updatedList);
    }
  };

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
    if (formProps.TaskTime <= 0) return alert("Нельзя вводить числа меньше 0");
    if (formProps.TaskName === "") return alert("field TaskName  is empty");

    if (!isNaN(formProps.TaskTime) && isNaN(formProps.TaskName)) {
      setListItems((oldItems) => [
        ...oldItems,
        {
          TaskName: formProps.TaskName,
          time: formProps.TaskTime,
          isPlaying: true,
          status: "active",
          id:
            oldItems.length > 0
              ? Math.max(...oldItems.map((i) => (i = i.id))) + 1
              : 1,
        },
      ]);
      setTaskName("");
      setTaskTime("");
    }
  };

  return (
    <main>
      <form onSubmit={getItemFromForm}>
        <Input
          name={"TaskName"}
          value={TaskName}
          setValue={setTaskName}
          placeholder={"Enter the task"}
        />
        <Input
          name={"TaskTime"}
          value={TaskTime}
          setValue={setTaskTime}
          placeholder={"Enter the time (in seconds)"}
        />
        <Button />
      </form>
      <div className={style["tasks_list"]}>
        {listItems
          .filter((e) => e.status === "active")
          .map((item) => (
            <Card item={item} key={item.id} changeStatus={changeStatus} />
          ))}
      </div>
      <div className={style["main__content"]}>
        <Complited listItems={listItems} changeStatus={changeStatus} />
        <Failed listItems={listItems} changeStatus={changeStatus} />
      </div>
    </main>
  );
};
