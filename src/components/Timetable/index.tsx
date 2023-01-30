import React from "react";

import styles from "./Timetable.module.scss";
import { Day } from "../Day";
import { TimetableProps } from "../../App";

export const Content: React.FC<TimetableProps> = (props) => {
  return (
    // className={TimetableActive ? styles.Timetable_active + ' ' + styles.Timetable : styles.Timetable}

    <main
      className={
        props.active ? styles.main : styles.main_active + " " + styles.main
      }
    >
      <div className={styles.content}>
        {props.raspisanie.map((dayLessons) => (
          <Day
            key={dayLessons.day}
            day={dayLessons.day}
            lessons={dayLessons.lessons}
          />
        ))}
      </div>
    </main>
  );
};
