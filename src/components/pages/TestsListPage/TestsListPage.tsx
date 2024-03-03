import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { TitleMain } from '../../commons/titles';
import { MinorText } from '../../commons/MinorText';
import pencil from '../../../assets/images/pencil.png';
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

  const cardWww = React.useMemo(() => {
    return (
      <div className={styles.cardTest} key='#12345'>
        <div className={styles.content}>
          <div className={styles.qqq}>
            <img className={styles.pencil} src={pencil} alt='pencil' />
            <h3 className={styles.title}>Название теста</h3>
          </div>

          <Link className={styles.linkBtn} to='#'>
            <p
              className={styles.personalColor}
              // @ts-ignore
              style={{ '--currentColor': 'black' }}
            />
          </Link>
        </div>

        <div className={styles.dateTime}>
          <MinorText str='20/11/23, 10:00' />
          <button className={styles.btn}>редактировать</button>
        </div>
      </div>
    );
  }, []);

  return (
    <main className={styles.wrapper}>
      <TitleMain textTitle='Список тестов' />
      <div className={styles.container}>
        {
          <>
            <>{cardWww}</>
            <>{cardWww}</>
            <>{cardWww}</>
            <>{cardWww}</>
            <>{cardWww}</>
            <>{cardWww}</>
          </>
        }
      </div>
    </main>
  );
};

TestsListPage.displayName = 'TestsListPage';
export default TestsListPage;

/*
        <div className='card'>
          <img src='...' className='img' alt='...' />
          <div className='body'>
            <h5 className='title'>Название теста</h5>
            <p className='text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <Link to='#' className='btn'>
              <button> Редактировать тест</button>
            </Link>
          </div>
        </div>
*/
