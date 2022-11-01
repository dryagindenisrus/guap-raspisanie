import React from "react";

import styles from './Day.module.scss';
import calendar from '../../img/calendar.svg';
import clock from '../../img/clock.svg';
import LR from '../../img/LR.svg';
import L from '../../img/L.svg';
import Pr from '../../img/PR.svg';
import person from '../../img/person.svg';
import build from '../../img/build.svg';


interface DayProps {
  active: boolean;
}

export const Day: React.FC<DayProps> = props => {

  return (
    // className={TimetableActive ? styles.Timetable_active + ' ' + styles.Timetable : styles.Timetable}
    
    <div className={styles.day}>
        <span className={styles.dayName}> <img src={calendar} alt="calendar" /> Понедельник</span>

        <div className={styles.lessons}>
            <div className={styles.lesson}>
                <div className={styles.time}>
                    <span className={styles.lessonCount}>1 пара</span>
                    <img src={clock} alt="clock" />
                    <span className={styles.lessonTime}>(15:00 - 16:30)</span>
                </div>
                <div className={styles.name}>
                    <img src={LR} alt="" />
                    <span>Компьютерная алгебра</span>
                </div>
                <div className={styles.info}>
                    <span> <img src={build} alt="" />Гастелло 15, ауд. 13-12</span>
                    <span> <img src={person} alt="" /> Крук A. E.</span>
                </div>
            </div>
            <div className={styles.lesson}>
                <div className={styles.time}>
                    <span className={styles.lessonCount}>2 пара</span>
                    <img src={clock} alt="clock" />
                    <span className={styles.lessonTime}>(17:00 - 18:30)</span>
                </div>
                <div className={styles.name}>
                    <img src={L} alt="" />
                    <span>Вычислительная техника и информационные технологии</span>
                </div>
                <div className={styles.info}>
                    <span> <img src={build} alt="" /> Б.Морская 67, ауд. 14-28</span>
                    <span> <img src={person} alt="" /> Крук A. E.</span>
                </div>
            </div>
            <div className={styles.lesson}>
                <div className={styles.time}>
                    <span className={styles.lessonCount}>2 пара</span>
                    <img src={clock} alt="clock" />
                    <span className={styles.lessonTime}>(17:00 - 18:30)</span>
                </div>
                <div className={styles.name}>
                    <img src={L} alt="" />
                    <span>Прикладная физическая культура (элективный модуль)</span>
                </div>
                <div className={styles.info}>
                    <span> <img src={build} alt="" /> Б.Морская 67, ауд. спортзал*</span>
                    {/* <span> <img src={person} alt="" /> Крук A. E.</span> */}
                </div>
            </div>
        </div>
    </div>
  )
}