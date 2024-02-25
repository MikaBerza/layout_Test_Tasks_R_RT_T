import React from 'react';
import styles from './FormTitle.module.css';

const FormTitle = ({ text }: { text: string }) => {
  return <h4 className={styles.title}>{text}</h4>;
};

FormTitle.displayName = 'FormTitle';
export default React.memo(FormTitle);
