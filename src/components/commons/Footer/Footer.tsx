import { LogoGit } from '../logos';
import { pathList } from '../../../utils/modules';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.inner}>
        <p className={styles.text}>© 2024 Copyright:</p>
        <a className={styles.textLink} href={pathList.githubPage}>
          MikaBerza
          <LogoGit />
        </a>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
