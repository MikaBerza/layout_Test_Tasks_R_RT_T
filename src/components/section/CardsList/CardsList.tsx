import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
// import { listTest } from '../../../utils/listTest';
import { CardTest } from '../../commons/CardTest';
import styles from './CardsList.module.css';
import { TestDataItemPropsType } from '../../../types/customType';

const CardsList = () => {
  // данные списка тестов
  const { testListData } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );

  /*_______________________________________
  во время разработки подставляем listTest, 
  т.к. после перезагрузки страницы, 
  данные testListData пропадают )))
  _______________________________________*/

  return (
    <section className={styles.wrapper}>
      {testListData.map((item: TestDataItemPropsType, index: number) => (
        <CardTest key={index} item={item} index={index} />
      ))}
    </section>
  );
};

CardsList.displayName = 'CardsList';
export default CardsList;
