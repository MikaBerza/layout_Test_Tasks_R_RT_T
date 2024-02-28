import { LogoMain } from '../logos';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <LogoMain />
      </div>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
