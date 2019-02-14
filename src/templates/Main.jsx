import React from 'react';
import styles from './MainTemplate.module.css';

const MainTemplate = ({ children }) => {
  return (
    <div className={styles.MainTemplate}>
      {children}
    </div>
  );
};

export default MainTemplate;
