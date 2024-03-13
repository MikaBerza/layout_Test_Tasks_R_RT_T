import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { Header } from '../../commons/Header';
import { Footer } from '../../commons/Footer';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const { errorMessage } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <h2 className={styles.text}>Error...{errorMessage.statusError}</h2>
      </main>
      <Footer />
    </>
  );
};

ErrorPage.displayName = 'ErrorPage';
export default ErrorPage;
