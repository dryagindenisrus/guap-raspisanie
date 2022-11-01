import React from "react";

import styles from './Sidebar.module.scss';


interface SidebarProps {
  active: boolean;
}

export const Sidebar: React.FC<SidebarProps> = props => {

  return (
    <aside className={props.active ? styles.sidebar : styles.sidebar_active + ' ' + styles.sidebar}>
      Hello, sidebar
      <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
      <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    </aside>
  )
}
