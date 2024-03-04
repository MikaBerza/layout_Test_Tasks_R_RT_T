import React from 'react';
import pencelImg from '../../../../assets/images/pencil.png';
import styles from './ButtonEdit.module.css';
import { Link } from 'react-router-dom';

//
const ButtonEdit = ({ path }: { path: string }) => {
  return (
    <Link className={styles.linkBtn} to={path}>
      <img className={styles.pencel} src={pencelImg} alt='img' />
    </Link>
  );
};

ButtonEdit.displayName = 'ButtonEdit';
export default ButtonEdit;
