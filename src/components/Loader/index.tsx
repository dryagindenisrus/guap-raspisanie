import React from 'react';

import styles from './Loader.module.scss';

export const Loader = () => {
  return (
  // className={TimetableActive ? styles.Timetable_active + ' ' + styles.Timetable : styles.Timetable}

    <div className={styles.wrapper}>
      <div className={styles.load}>
        <span className={styles.loader}></span>
      </div>
      <p>Загрузка...</p>
    </div>
  );
};
