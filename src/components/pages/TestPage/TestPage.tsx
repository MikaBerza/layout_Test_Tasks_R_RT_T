import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { Header } from '../../commons/Header';
import { MainTitle, MediumTitle } from '../../commons/titles';
import { OneFromTheList } from '../../section';
import { Footer } from '../../commons/Footer';
import styles from './TestPage.module.css';

const TestPage = () => {
  // данные элемента списка тестов
  const { testListItemData } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );
  // тип вопроса, id, название теста, тест
  const { id, title, questionType, test } = React.useMemo(
    () => testListItemData,
    [testListItemData]
  );

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <MainTitle title='Тест' />
        <div className={styles.inner} key={id}>
          <MediumTitle title={title} />

          {questionType === 'один из списка' && (
            <OneFromTheList testData={test} testName={title} />
          )}

          {questionType === 'несколько из списка' && (
            <div>
              <h1>Тип вопроса</h1>
              <h2>___{questionType}___</h2>
            </div>
          )}

          {questionType === 'численный ответ' && (
            <div>
              <h1>Тип вопроса</h1>
              <h2>___{questionType}___</h2>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

TestPage.displayName = 'TestPage';
export default React.memo(TestPage);
