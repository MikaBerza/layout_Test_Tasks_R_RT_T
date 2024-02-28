import React from 'react';
import styles from './TitleLoginForm.module.css';

const TitleLoginForm = ({ text }: { text: string }) => {
  return <h4 className={styles.title}>{text}</h4>;
};

TitleLoginForm.displayName = 'TitleLoginForm';
export default React.memo(TitleLoginForm);
