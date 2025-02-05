import React, { useState } from "react";
import style from "./StatusBar.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const StatusBar = () => {
  const [play, setPlay] = useState(true);

  const togglePlay = (e) => {
    e.preventDefault();
    setPlay((state) => {
      return (state = !state);
    });
  };

  return (
    <div className={style["status__bar"]}>
      <h2 className={style["header"]}>Название задачи!</h2>
      <div className={style["timer"]}>
        {" "}
        <CountdownCircleTimer
          isPlaying
          duration={7}
          colors={["#004777"]}
          // colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          // colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>

      <div className={style["controllers"]}>
        <a href="#">
          <span className={`material-icons ${style['green']}` } >done_all</span>
        </a>
        <a href="#" onClick={(e) => togglePlay(e)}>
          {play ? (
            <span className={`material-icons ${style['yellow']}` } >pause</span>
          ) : (
            <span className={`material-icons ${style['yellow']}` }>play_arrow</span>
          )}
        </a>
        <a href="#">
          <span className={`material-icons ${style['red']}` }>close</span>
        </a>
      </div>
    </div>
  );
};
