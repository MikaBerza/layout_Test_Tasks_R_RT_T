import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { Header } from '../../commons/Header';
import { TitleMain } from '../../commons/titles';
import { CardTest, ListControlPanel } from '../../section';
import { Footer } from '../../commons/Footer';
import { pathList } from '../../../utils/modules';
import styles from './TestsListPage.module.css';
import { ButtonCreateTest } from '../../commons/buttons';

const TestsListPage = () => {
  const { isAdmin, isError } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isError) {
      // переходим по маршруту, на страницу с ошибкой
      navigate(pathList.errorPage);
    }
  }, [isError, navigate]);

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TitleMain title='Тесты' />
        <ListControlPanel />
        {isAdmin && <ButtonCreateTest patch='#' name='Создать тест' />}
        <CardTest />
      </main>
      <Footer />
    </>
  );
};

TestsListPage.displayName = 'TestsListPage';
export default React.memo(TestsListPage);
