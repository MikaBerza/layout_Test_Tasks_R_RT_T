import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import styles from './Errors.module.css';

const Errors = () => {
  const { errorMessage } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>Error...{errorMessage.statusError}</h2>
    </div>
  );
};

Errors.displayName = 'Errors';
export default Errors;
