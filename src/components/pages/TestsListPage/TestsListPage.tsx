import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { Header } from '../../commons/Header';
import { TitleMain } from '../../commons/titles';
import { Footer } from '../../commons/Footer';
import styles from './TestsListPage.module.css';

const TestsListPage = () => {
  const { errorMessage } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    if (errorMessage.isError) {
      // переходим по маршруту, на страницу с ошибкой
      navigate('/layout_Test_Tasks_R_RT_T/error');
    }
  }, [errorMessage.isError, navigate]);

  return (
    <>
      <Header />
      <main className={styles.www1}>
        <TitleMain textTitle='Список тестов' />
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
        <h1 className={styles.www2}>Контент условный</h1>
      </main>
      <Footer />
    </>
  );
};

TestsListPage.displayName = 'TestsListPage';
export default TestsListPage;
