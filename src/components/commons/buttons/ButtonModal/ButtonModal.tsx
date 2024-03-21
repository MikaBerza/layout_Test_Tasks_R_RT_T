import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonModal.module.css';
import { ButtonModalPropsType } from '../../../../types/customType';

const ButtonModal = ({
  nameBtn,
  onClick,
  link = null,
}: ButtonModalPropsType) => (
  <>
    {link ? (
      <Link className={styles.btn} to={link} onClick={onClick}>
        {nameBtn}
      </Link>
    ) : (
      <button className={styles.btn} onClick={onClick}>
        {nameBtn}
      </button>
    )}
  </>
);

ButtonModal.displayName = 'ButtonModal';
export default React.memo(ButtonModal);
