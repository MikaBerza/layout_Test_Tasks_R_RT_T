import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonCreateTest.module.css';
import { ButtonCreateTestPropsType } from '../../../../types/customType';

const ButtonCreateTest = ({ patch, name }: ButtonCreateTestPropsType) => {
  return (
    <Link to={patch} className={styles.linkBtn}>
      <button className={styles.btn}>{name}</button>
    </Link>
  );
};

ButtonCreateTest.displayName = 'ButtonCreateTest';
export default React.memo(ButtonCreateTest);
