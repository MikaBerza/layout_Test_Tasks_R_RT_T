import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLoginForm.module.css';
import { ButtonLoginFormType } from '../../../../types/customType';

const ButtonLoginForm = ({ elementName, name, type }: ButtonLoginFormType) => {
  return (
    <div className={styles.wrapper}>
      {elementName === 'link' ? (
        <Link to='/layout_Test_Tasks_R_RT_T/authorization'>
          <button className={styles.btn} type={type}>
            {name}
          </button>
        </Link>
      ) : (
        <button className={styles.btn} type={type}>
          {name}
        </button>
      )}
    </div>
  );
};

ButtonLoginForm.displayName = 'ButtonLoginForm';
export default React.memo(ButtonLoginForm);
