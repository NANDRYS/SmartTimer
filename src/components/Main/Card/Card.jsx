import React, { useState } from "react";
import style from "../../../assets/css/MainStyle/Card.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const Card = ({ item, changeStatus }) => {
  const [pauseOrPlay, setpauseOrPlay] = useState(true);
  const [hide, setHide] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const hideContent = (e) => {
    setHide((state) => (state = !state));
  };

  const togglePlay = (e) => {
    e.preventDefault();
    setpauseOrPlay((state) => {
      return (state = !state);
    });
    setIsPlaying((state) => {
      return (state = !state);
    });
  };

  return (
    <div className={style["status__bar"]}>
      <h2
        className={style["header"]}
        onClick={(e) => {
          hideContent();
        }}
      >
        {item.TaskName}
      </h2>
      <div className={hide ? style["hide_content"] : ""}>
        <div className={style["timer"]}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={item.time}
            colors={["#004777"]}
            // colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            // colorsTime={[7, 5, 2, 0]}
          >
            {({ remainingTime }) => {
              const hours = Math.floor(remainingTime / 3600);
              const minutes = Math.floor((remainingTime % 3600) / 60);
              const seconds = remainingTime % 60;
              console.log(item.time);
              if (hours <= 0 && minutes <= 0 && seconds <= 0) {
                changeStatus(item.id, "failed");
              }
              return `${hours}:${minutes}:${seconds}`;
            }}
          </CountdownCircleTimer>
        </div>

        <div className={style["controllers"]}>
          <a href="#">
            <span
              className={`material-icons ${style["green"]}`}
              onClick={() => {
                changeStatus(item.id, "complited");
              }}
            >
              done_all
            </span>
          </a>
          <a href="#" onClick={(e) => togglePlay(e)}>
            {pauseOrPlay ? (
              <span className={`material-icons ${style["yellow"]}`}>pause</span>
            ) : (
              <span className={`material-icons ${style["yellow"]}`}>
                play_arrow
              </span>
            )}
          </a>
          <a href="#">
            <span
              className={`material-icons ${style["red"]}`}
              onClick={() => {
                changeStatus(item.id, "delete");
              }}
            >
              close
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
