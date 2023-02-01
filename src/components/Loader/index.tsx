import React from 'react';

import styles from './Loader.module.scss';

export const Loader = (props: { message: string }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.load}>
        <span className={styles.loader}></span>
      </div>
      <p>{props.message}</p>
    </div>
  );
};
