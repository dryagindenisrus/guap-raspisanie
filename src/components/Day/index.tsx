import React, { useContext } from 'react';

import { ContextPeriod, PeriodContext, DayProps } from '../../App';
import styles from './Day.module.scss';
import calendar from '../../img/calendar.svg';
import clock from '../../img/clock.svg';
import Lr from '../../img/LR.svg';
import L from '../../img/L.svg';
import Pr from '../../img/PR.svg';
import Kr from '../../img/KR.svg';
import person from '../../img/person.svg';
import build from '../../img/build.svg';

export const Day: React.FC<DayProps> = (props) => {
  const typeLesson: Array<{ name: string; type: string }> = [
    { name: 'ПР', type: Pr },
    { name: 'Л', type: L },
    { name: 'ЛР', type: Lr },
    { name: 'КР', type: Kr },
  ];
  const days: Array<string> = [
    'Вне сетки расписания',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const times: Array<string> = [
    '9:30–11:00',
    '11:10–12:40',
    '13:00–14:30',
    '15:00–16:30',
    '16:40–18:10',
    '18:30–20:00',
    '20:10–21:40',
  ];
  const { period } = useContext<ContextPeriod>(PeriodContext);

  const isTruePeriod = (period: boolean, lessonPeriod: number) => {
    return lessonPeriod ? Boolean(Number(period) + 1 === lessonPeriod) : true;
  };

  return (
    <div key={props.day} className={styles.day}>
      <span className={styles.dayName}>
        <img src={calendar} alt="calendar" />
        {days[props.day]}
      </span>

      <div className={styles.lessons}>
        {props.lessons
          .sort((a, b) => (a.Less >= b.Less ? 1 : -1))
          .map((lesson) =>
            lesson.ItemId ? (
              isTruePeriod(period, lesson.Week) ? (
                <div key={lesson.ItemId} className={styles.lesson}>
                  <div className={styles.time}>
                    <span className={styles.lessonCount}>
                      {lesson.Less ? (
                        <>{lesson.Less} пара</>
                      ) : (
                        <>Вне сетки расписания</>
                      )}
                    </span>
                    {lesson.Less ? <img src={clock} alt="clock" /> : <></>}
                    <span className={styles.lessonTime}>{times[lesson.Less - 1]}</span>
                  </div>
                  <div className={styles.name}>
                    <img
                      src={
                        // typeLesson.filter((elem) => elem.name === lesson.type)[0]
                        typeLesson.find((elem) => elem.name === lesson.Type)?.type
                      }
                      alt=""
                    />
                    <span>{lesson.Disc}</span>
                  </div>
                  <div className={styles.info}>
                    <span>
                      <img src={build} alt="" />
                      {lesson.Build ? (
                        <>
                          {lesson?.Build} {lesson?.Rooms}
                        </>
                      ) : (
                        <>{lesson.Dept}</>
                      )}
                      {/* {lesson?.Build} {lesson?.Rooms} */}
                    </span>
                    <span>
                      {lesson.PrepsText ? <img src={person} alt="" /> : <></>}
                      {lesson.PrepsText ? lesson.PrepsText : <></>}
                    </span>
                  </div>
                </div>
              ) : (
                <></>
              )
            ) : (
              <></>
            )
          )}
      </div>
    </div>
  );
};
