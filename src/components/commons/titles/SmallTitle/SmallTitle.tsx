import React from 'react';
import styles from './SmallTitle.module.css';
//
const SmallTitle = ({ title }: { title: string }) => {
  return <h4 className={styles.title}>{title}</h4>;
};

SmallTitle.displayName = 'SmallTitle';
export default React.memo(SmallTitle);
