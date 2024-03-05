import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { ButtonEdit } from '../buttons';
import { MinorText } from '../MinorText';
import image from '../../../assets/images/test.png';
import styles from './CardTest.module.css';
import { CardTestPropsType } from '../../../types/customType';

const CardTest = ({
  title,
  dateTime,
  thePathToEdit,
  pathToTest,
}: CardTestPropsType) => {
  const { isAdmin } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );

  /* Примечание:
  -длина текста в title не должна превышать 110 знаков с пробелом,
  в противном случае лишний текст будет скрываться */

  return (
    <div className={styles.wrapper}>
      {isAdmin && <ButtonEdit path='#' />}
      <div className={styles.content}>
        <img className={styles.image} src={image} alt='img' />
        <h3 className={styles.title}>{title}</h3>
        <Link className={styles.linkBtn} to='#'>
          <p className={styles.arrow} />
        </Link>
      </div>

      <div className={styles.dateTime}>
        <MinorText str={dateTime} />
      </div>
    </div>
  );
};

CardTest.displayName = 'CardTest';
export default React.memo(CardTest);
