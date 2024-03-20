import React from 'react';
import styles from './TitleMain.module.css';

const TitleMain = ({ title }: { title: string }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

TitleMain.displayName = 'TitleMain';
export default React.memo(TitleMain);
