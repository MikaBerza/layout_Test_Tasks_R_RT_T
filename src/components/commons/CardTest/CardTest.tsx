import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setTestListItemData } from '../../../redux/slices/loginFormSlice';
import { ButtonEdit } from '../buttons';
import { ModalWindow } from '../ModalWindow';
import { MinorText } from '../MinorText';

import image from '../../../assets/images/test.png';
import styles from './CardTest.module.css';
import { CardTestPropsType } from '../../../types/customType';

const CardTest = ({
  item,
  index,
}: {
  item: CardTestPropsType;
  index: number;
}) => {
  const [modalIsActive, setModalIsActive] = React.useState(false);
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );

  // функция, обработать переход к тесту
  const handleTransitionToTest = React.useCallback(
    (testListItemData: CardTestPropsType) => {
      // открываем модальное окно
      setModalIsActive(true);
      // получаем элемент из списка тестов
      dispatch(setTestListItemData(testListItemData));
    },
    [dispatch]
  );

  // функция, обработать закрытие модального окна
  const handleClosingTheModalWindow = React.useCallback(() => {
    // закрываем модальное окно
    setModalIsActive(false);
  }, [setModalIsActive]);

  // данные модального окна
  const modalWindowData = React.useMemo(
    () => ({
      title: item.title,
      content: 'Начать прохождение теста ?',
      modalButtonData: [
        {
          nameBtn: 'Подтвердить',
          link: `/home-page/tests-list-page/test-page/${index + 1}`,
          onClick: handleClosingTheModalWindow,
        },
        { nameBtn: 'Отмена', onClick: handleClosingTheModalWindow },
      ],
    }),
    [item.title, index, handleClosingTheModalWindow]
  );

  return (
    <div className={styles.container} key={item.id}>
      {isAdmin && <ButtonEdit path='#' />}
      <div className={styles.content}>
        <img className={styles.image} src={image} alt='img' />
        <h3 className={styles.title}>{item.title}</h3>
        <button
          className={styles.btn}
          onClick={() => handleTransitionToTest(item)}
        />
      </div>
      <div className={styles.dateTime}>
        <MinorText str={item.dateTime} />
      </div>
      {modalIsActive && <ModalWindow {...modalWindowData} />}
    </div>
  );
};

CardTest.displayName = 'CardTest';
export default React.memo(CardTest);
