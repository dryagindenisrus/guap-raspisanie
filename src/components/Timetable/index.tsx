import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import { FilterContext, ContextObject, DayProps } from '../../App';
import { host } from '../..';
import { Day } from '../Day';
import { Loader } from '../Loader';
import styles from './Timetable.module.scss';

export const Timetable = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Array<DayProps>>([]);
  const { searchValue } = useContext<ContextObject>(FilterContext);

  // setIsLoading(true);

  useEffect(() => {
    setIsLoading(true);
    const req: string =
      host +
      `/api/v1/rasp/${
        window.localStorage.getItem('selectedGroup')?.split('&')[1] ||
        searchValue.group.value
      }/${
        window.localStorage.getItem('selectedPrepod')?.split('&')[1] ||
        searchValue.prepod.value
      }/${
        window.localStorage.getItem('selectedCorpus')?.split('&')[1] ||
        searchValue.corpus.value
      }/${
        window.localStorage.getItem('selectedAudit')?.split('&')[1] ||
        searchValue.audit.value
      }`;
    axios
      .get(req)
      .then((json) => {
        setItems(json.data);
      })
      .then(() => setIsLoading(false));
  }, [searchValue]);

  return (
    <main className={styles.main_active + ' ' + styles.main}>
      {isLoading ? (
        <Loader message="Загрузка..." />
      ) : items.length ? (
        <div className={styles.content}>
          {items.map((dayLessons, index) => (
            <Day
              key={dayLessons.day + index.toString()}
              day={dayLessons.day}
              lessons={dayLessons.lessons}
            />
          ))}
        </div>
      ) : (
        <Loader message="Ничего не найдено" />
      )}
    </main>
  );
};
