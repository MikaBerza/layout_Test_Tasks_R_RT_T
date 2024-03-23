import React from 'react';
import styles from './MediumTitle.module.css';

const MediumTitle = ({ title, cN = '' }: { title: string; cN?: string }) => {
  return <h3 className={`${styles.title} ${cN && styles[cN]} `}>{title}</h3>;
};

MediumTitle.displayName = 'MediumTitle';
export default React.memo(MediumTitle);
