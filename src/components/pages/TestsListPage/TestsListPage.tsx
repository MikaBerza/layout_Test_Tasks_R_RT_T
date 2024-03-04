import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { TitleMain } from '../../commons/titles';
import { CardTest } from '../../commons/CardTest';
import { listTest } from '../../../utils/listTest';
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
    <main className={styles.wrapper}>
      <TitleMain textTitle='Тесты' />
      <div className={styles.container}>
        {listTest.map((item) => {
          return (
            <CardTest
              key={item.keyId}
              title={item.title}
              dateTime={item.dateTime}
              pathToTest={item.pathToTest}
            />
          );
        })}
      </div>
    </main>
  );
};

TestsListPage.displayName = 'TestsListPage';
export default TestsListPage;

/*
!!!фдлводф овдфл оывдл фоыдвло фджывло фждлвоы ждф
 зфлывщзфл оыдвлф ждывл жфдлыв 
 фжы вдлф оджвлф ждылвжд флыжвдл фждывл 
 длфы двлофдлыв офдлвыо фдвл фжды лвждф 
 длфь ыдвлфжды влфжд ывлжфдыл вжфдл ы
 длфы двлофдлыв офдлвыо фдвл фжды лвждф 
 длфы двлофдлыв офдлвыо фдвл фжды лвждф 
 длфы двлофдлыв офдлвыо фдвл фжды лвждф 
 &&&&
*/
