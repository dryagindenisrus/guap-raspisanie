import React from "react";
import { useState } from "react";

import styles from './Timetable.module.scss';


interface TimetableProps {
  active: boolean;
}

export const Content: React.FC<TimetableProps> = props => {

  return (
    // className={TimetableActive ? styles.Timetable_active + ' ' + styles.Timetable : styles.Timetable}
    
    <main className={props.active ? styles.main : styles.main_active + ' ' + styles.main}>
      <div className={styles.weekSelector}></div>
      <div className={styles.content}>
      Hello, Main
        <p>1111111111111111111111111111111111111111111111111111111111111</p>
        <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
        <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>10000</p>
      </div>
      
    </main>
  )
}