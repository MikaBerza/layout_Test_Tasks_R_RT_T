import React from 'react';
import styles from './MainTitle.module.css';

const MainTitle = ({ title }: { title: string }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

MainTitle.displayName = 'MainTitle';
export default React.memo(MainTitle);
