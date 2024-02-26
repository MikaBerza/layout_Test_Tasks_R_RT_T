import React from 'react';
import styles from './ButtonLoginForm.module.css';
import { ButtonLoginFormType } from '../../../../types/customType';

const ButtonLoginForm = ({ name, type }: ButtonLoginFormType) => {
  return (
    <div className={styles.buttons}>
      <button className={styles.button} type={type}>
        {name}
      </button>
    </div>
  );
};

ButtonLoginForm.displayName = 'ButtonLoginForm';
export default React.memo(ButtonLoginForm);
