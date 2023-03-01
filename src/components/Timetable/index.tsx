import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import {
  FilterContext,
  ContextObject,
  SidebarContext,
  ContextSidebar,
  Lesson,
} from '../../App';
import { host } from '../..';
import { Day } from '../Day';
import { Loader } from '../Loader';
import styles from './Timetable.module.scss';

export const Timetable = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Array<Lesson>>([]);
  const { searchValue } = useContext<ContextObject>(FilterContext);
  const { setSidebarActive } = useContext<ContextSidebar>(SidebarContext);

  // setIsLoading(true);

  useEffect(() => {
    setIsLoading(true);
    const req: string =
      host +
      `/get-sem-rasp${
        window.localStorage.getItem('selectedGroup')?.split('&')[1] !== '-1' ||
        /* eslint-disable */
        searchValue.group.ItemId + 1 > 0
          ? `/group${
              window.localStorage.getItem('selectedGroup')?.split('&')[1] ||
              searchValue.group.ItemId
            }`
          : ''
      }/${
        window.localStorage.getItem('selectedPrepod')?.split('&')[1] !== '-1' ||
        /* eslint-disable */
        searchValue.prepod.ItemId + 1 > 0
          ? `prep${
              window.localStorage.getItem('selectedPrepod')?.split('&')[1] ||
              searchValue.prepod.ItemId
            }/`
          : ''
      }`;
    /* eslint-enable */
    if (req !== 'https://api.guap.ru/rasp/custom/get-sem-rasp/') {
      axios
        .get(req)
        .then((json) => {
          setItems(json.data);
        })
        .then(() => setSidebarActive(false))
        .then(() => setIsLoading(false));
    } else {
      setItems([]);
      setSidebarActive(false);
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const less: Lesson = {
    ItemId: 0,
    Week: 0,
    Day: 0,
    Less: 0,
    Build: '',
    Rooms: '',
    Disc: '',
    Type: '',
    Groups: '',
    GroupsText: '',
    Preps: '',
    PrepsText: '',
    Dept: null,
  };

  const groupBy = (array: Array<Lesson>, key: string): Array<Array<Lesson>> => {
    return array.reduce(
      (result, currentValue) => {
        (result[currentValue.Day] = result[currentValue.Day] || []).push(currentValue);
        return result;
      },
      [[less]]
    );
  };

  const grouped: Array<Array<Lesson>> = groupBy(
    items.sort((a, b) => (a.Day >= b.Day ? 1 : -1)),
    'Day'
  );

  return (
    <main className={styles.main_active + ' ' + styles.main}>
      {isLoading ? (
        <Loader message="Загрузка..." />
      ) : items.length ? (
        <div className={styles.content}>
          {grouped.map((dayLessons, index) => (
            <Day
              key={dayLessons[0].Day + index.toString()}
              day={dayLessons[0].Day}
              lessons={dayLessons}
            />
          ))}
        </div>
      ) : (
        <Loader message="Ничего не найдено" />
      )}
    </main>
  );
};
