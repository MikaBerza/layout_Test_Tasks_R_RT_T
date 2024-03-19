import React from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setTestListItemData } from '../../../redux/slices/loginFormSlice';
import { ButtonEdit } from '../../commons/buttons';
import { MinorText } from '../../commons/MinorText';
import { listTest } from '../../../utils/listTest';
import image from '../../../assets/images/test.png';
import styles from './CardTest.module.css';
import {
  CardTestPropsType,
  TestDataItemPropsType,
} from '../../../types/customType';

const CardTest = () => {
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );

  // обработать переход к прохождению теста
  const handleTransitionToPassingTheTest = React.useCallback(
    (testListItemData: CardTestPropsType) => {
      dispatch(setTestListItemData(testListItemData));
    },
    [dispatch]
  );

  const card = React.useCallback(
    (item: CardTestPropsType, index: number) => {
      return (
        <div className={styles.inner} key={item.id}>
          {isAdmin && <ButtonEdit path='#' />}
          <div className={styles.content}>
            <img className={styles.image} src={image} alt='img' />
            {/* Примечание:
            -длина текста в title не должна превышать 110 знаков с пробелом,
            в противном случае лишний текст будет скрываться */}
            <h3 className={styles.title}>{item.title}</h3>

            <Link
              className={styles.linkBtn}
              to={`/home-page/tests-list-page/test-page/${String(index + 1)}`}
              onClick={() => handleTransitionToPassingTheTest(item)}
            >
              <button className={styles.btn} />
            </Link>
          </div>

          <div className={styles.dateTime}>
            <MinorText str={item.dateTime} />
          </div>
        </div>
      );
    },
    [handleTransitionToPassingTheTest, isAdmin]
  );

  return (
    <section className={styles.wrapper}>
      {listTest.map((item: TestDataItemPropsType, index) => card(item, index))}
    </section>
  );
};

CardTest.displayName = 'CardTest';
export default CardTest;
