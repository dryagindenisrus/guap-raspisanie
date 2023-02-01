import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";

import { FilterContext, ContextObject, DayProps } from "../../App";
import { host } from "../..";
import { Day } from "../Day";
import { Loader } from "../Loader";
import styles from "./Timetable.module.scss";

export const Timetable = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Array<DayProps>>([]);
  const notInitialRender = useRef(false);

  const { searchValue } = useContext<ContextObject>(FilterContext);

  useEffect(() => {
    if (notInitialRender.current) {
      setIsLoading(true);
    }
    const req: string =
      host +
      `/api/v1/rasp/${searchValue.group.value}/${searchValue.prepod.value}/${searchValue.corpus.value}/${searchValue.audit.value}`;
    axios.get(req).then((json) => {
      setItems(json.data);
    });

    setIsLoading(false);
  }, [searchValue]);

  return (
    // className={TimetableActive ? styles.Timetable_active + ' ' + styles.Timetable : styles.Timetable}

    <main className={styles.main_active + " " + styles.main}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.content}>
          {items.map((dayLessons) => (
            <Day
              key={dayLessons.day}
              day={dayLessons.day}
              lessons={dayLessons.lessons}
            />
          ))}
        </div>
      )}
    </main>
  );
};
