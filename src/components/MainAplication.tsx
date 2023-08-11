import React, { FC } from 'react';
import { GeneralInterface } from '../types/types';
import styles from '../styles/globalStyle.module.css';

const MainAplication: FC<GeneralInterface> = ({ children }) => {
  return (
    <div>
      <div className={styles.mainIfoBlock} />
      <div>{children}</div>
    </div>
  );
};

export default MainAplication;
