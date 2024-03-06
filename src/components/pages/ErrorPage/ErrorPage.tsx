import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  const { errorMessage } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>Error...{errorMessage.statusError}</h2>
    </div>
  );
};

ErrorPage.displayName = 'ErrorPage';
export default ErrorPage;
