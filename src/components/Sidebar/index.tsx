import React, { useEffect, useState } from "react";

import { Filter } from "../Filter";
import logo from "../../img/guap-logo.svg";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  active: boolean;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  useEffect(() => {
    fetch("/api/v1/params")
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => {
          // setParams(json);
          console.log(json);
        });
      });
  }, []);

  return (
    <aside
      className={
        props.active
          ? styles.sidebar
          : styles.sidebar_active + " " + styles.sidebar
      }
    >
      <div className={styles.about}>
        <img src={logo} alt="" />
        <h1>SUAI</h1>
        <span>расписание</span>
      </div>
      <Filter />
    </aside>
  );
};
