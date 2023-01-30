import React from "react";

import { Period } from "../Period";
import { DayProps } from "../../App";
import styles from "./Day.module.scss";
import calendar from "../../img/calendar.svg";
import clock from "../../img/clock.svg";
import Lr from "../../img/LR.svg";
import L from "../../img/L.svg";
import Pr from "../../img/PR.svg";
import Kr from "../../img/KR.svg";
import person from "../../img/person.svg";
import build from "../../img/build.svg";

export const Day: React.FC<DayProps> = (props) => {
  const typeLesson: Array<{ name: string; type: string }> = [
    { name: "ПР", type: Pr },
    { name: "Л", type: L },
    { name: "ЛР", type: Lr },
    { name: "КР", type: Kr },
  ];

  return (
    // className={TimetableActive ? styles.Timetable_active + ' ' + styles.Timetable : styles.Timetable}

    <div className={styles.day}>
      <span className={styles.dayName}>
        {" "}
        <img src={calendar} alt="calendar" />
        {props.day}
      </span>

      <div className={styles.lessons}>
        {props.lessons.map((para, index) => (
          <div key={props.day + index}>
            {para.map((lesson, id) => (
              <div key={lesson.count + id} className={styles.lesson}>
                <div className={styles.time}>
                  <span className={styles.lessonCount}>
                    {lesson.count} пара
                  </span>
                  {lesson.time ? <img src={clock} alt="clock" /> : <></>}
                  <span className={styles.lessonTime}>{lesson.time}</span>
                  <Period period={lesson.period} />
                  <img src="" alt="" />
                </div>
                <div className={styles.name}>
                  <img
                    src={
                      typeLesson.filter((elem) => elem.name === lesson.type)[0]
                        .type
                    }
                    alt=""
                  />
                  <span>{lesson.name}</span>
                </div>
                <div className={styles.info}>
                  <span>
                    <img src={build} alt="" />
                    {lesson.location}
                  </span>
                  <span>
                    {lesson.prepod ? <img src={person} alt="" /> : <></>}
                    {lesson.prepod}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
