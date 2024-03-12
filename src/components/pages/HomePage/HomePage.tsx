import { Link } from 'react-router-dom';
import { pathList } from '../../../utils/modules';
import { Footer } from '../../commons/Footer';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <main className={styles.wrapper}>
        <div className={styles.avenue}>
          <p className={styles.wall}>- - - - - - - -</p>
          <div className={styles.composition}>
            <h4 className={styles.title}>Тесты</h4>
            <p className={styles.emoji}>&#127963;</p>
          </div>
          <p className={styles.wall}>- - - - - - - -</p>
        </div>

        <div className={styles.links}>
          <Link className={styles.link} to={pathList.registration}>
            Регистрация
          </Link>
          <Link className={styles.link} to={pathList.authorization}>
            Авторизация
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

HomePage.displayName = 'HomePage';
export default HomePage;
