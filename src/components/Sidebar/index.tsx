import React from "react";
import { useState } from "react";

import styles from './Sidebar.module.scss';

// active: any, setActive: any
export const Sidebar = (active: any, setActive: any) => {

  const [ sidebarActive, setSidebarActive ] = useState(false);

  return (
    <aside className={sidebarActive ? styles.sidebar_active + ' ' + styles.sidebar : styles.sidebar}>
      <button onClick={() => setSidebarActive(!sidebarActive)} className="openBtn"></button>
      Hello, sidebar
    </aside>
  )
}
