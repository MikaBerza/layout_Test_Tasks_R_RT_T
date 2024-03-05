import React from 'react';
import styles from './MinorText.module.css';

const MinorText = ({ str }: { str: string }) => {
  return <span className={styles.text}>{str}</span>;
};

MinorText.displayName = 'MinorText';
export default React.memo(MinorText);
