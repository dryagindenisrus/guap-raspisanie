import React from "react";

import styles from "./Navbar.module.scss";
import logo from "../../img/guap-logo.svg";

interface NavbarProps {
  active: boolean;
  setActive(value: boolean): void;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <nav className={styles.topnav}>
      <img src={logo} alt="" />
      <button
        onClick={() => props.setActive(!props.active)}
        className={styles.openBtn}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.75 11C2.75 10.6203 3.0578 10.3125 3.4375 10.3125H18.5625C18.9422 10.3125 19.25 10.6203 19.25 11C19.25 11.3797 18.9422 11.6875 18.5625 11.6875H3.4375C3.0578 11.6875 2.75 11.3797 2.75 11Z"
            fill="#EBEBEB"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.75 6.1875C2.75 5.8078 3.0578 5.5 3.4375 5.5H18.5625C18.9422 5.5 19.25 5.8078 19.25 6.1875C19.25 6.5672 18.9422 6.875 18.5625 6.875H3.4375C3.0578 6.875 2.75 6.5672 2.75 6.1875Z"
            fill="#EBEBEB"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.75 15.8125C2.75 15.4328 3.0578 15.125 3.4375 15.125H18.5625C18.9422 15.125 19.25 15.4328 19.25 15.8125C19.25 16.1922 18.9422 16.5 18.5625 16.5H3.4375C3.0578 16.5 2.75 16.1922 2.75 15.8125Z"
            fill="#EBEBEB"
          />
        </svg>
      </button>
    </nav>
  );
};
