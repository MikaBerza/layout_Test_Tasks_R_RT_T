import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setTestListItemData } from '../../../redux/slices/loginFormSlice';
import { ButtonEdit } from '../buttons';
import { ModalWindow } from '../ModalWindow';
import { MinorText } from '../MinorText';
import image from '../../../assets/images/test.png';
import styles from './CardTest.module.css';
import { TestDataItemPropsType } from '../../../types/customType';

const CardTest = ({
  item,
  index,
}: {
  item: TestDataItemPropsType;
  index: number;
}) => {
  const [modalIsActive, setModalIsActive] = React.useState(false);
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );

  // функция, обработать открытие модального окна
  const handleOpenTheModalWindow = React.useCallback(() => {
    // открываем модальное окно
    setModalIsActive(true);
  }, []);

  // функция, обработать переход к тесту
  const handleTransitionToTest = React.useCallback(() => {
    // получаем элемент из списка тестов
    dispatch(setTestListItemData(item));
    // закрываем модальное окно
    setModalIsActive(false);
  }, [dispatch, item]);

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
          onClick: handleTransitionToTest,
        },
        { nameBtn: 'Отмена', onClick: handleClosingTheModalWindow },
      ],
    }),
    [item.title, index, handleTransitionToTest, handleClosingTheModalWindow]
  );

  return (
    <div className={styles.container} key={item.id}>
      {isAdmin && <ButtonEdit path='#' />}
      <div className={styles.content}>
        <img className={styles.image} src={image} alt='img' />
        <h3 className={styles.title}>{item.title}</h3>
        <button className={styles.btn} onClick={handleOpenTheModalWindow} />
        {modalIsActive && <ModalWindow {...modalWindowData} />}
      </div>
      <div className={styles.dateTime}>
        <MinorText str={item.dateTime} />
      </div>
    </div>
  );
};

CardTest.displayName = 'CardTest';
export default React.memo(CardTest);
