import React from 'react';
import styles from './ButtonLoginForm.module.css';
import { ButtonLoginFormPropsType } from '../../../../types/customType';

const ButtonLoginForm = ({ name, type }: ButtonLoginFormPropsType) => {
  return (
    <button className={styles.btn} type={type}>
      {name}
    </button>
  );
};

ButtonLoginForm.displayName = 'ButtonLoginForm';
export default React.memo(ButtonLoginForm);
