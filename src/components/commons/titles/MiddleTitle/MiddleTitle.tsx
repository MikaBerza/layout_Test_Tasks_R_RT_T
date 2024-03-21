import React from 'react';
import styles from './MiddleTitle.module.css';

const MiddleTitle = ({ title }: { title: string }) => {
  return <h3 className={styles.title}>{title}</h3>;
};

MiddleTitle.displayName = 'MiddleTitle';
export default React.memo(MiddleTitle);
