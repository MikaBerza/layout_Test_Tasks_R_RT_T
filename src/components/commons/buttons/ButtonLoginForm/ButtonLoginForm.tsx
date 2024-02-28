import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLoginForm.module.css';
import { ButtonLoginFormType } from '../../../../types/customType';

const ButtonLoginForm = ({ path, name, type }: ButtonLoginFormType) => {
  return (
    <div className={styles.wrapper}>
      <Link to={path}>
        <button className={styles.btn} type={type}>
          {name}
        </button>
      </Link>
    </div>
  );
};

ButtonLoginForm.displayName = 'ButtonLoginForm';
export default React.memo(ButtonLoginForm);
