import React from "react";
import { useState } from "react";

import styles from './Timetable.module.scss';

export const Timetable = (active: any, setActive: any) => {

  return (
    // className={sidebarActive ? styles.sidebar_active + ' ' + styles.sidebar : styles.sidebar}
    <main className={active ? styles.main_active + ' ' + styles.main : styles.main}>
      Hello, Main
      <p>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</p>
    </main>
  )
}