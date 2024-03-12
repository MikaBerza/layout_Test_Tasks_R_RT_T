import { Link } from 'react-router-dom';
import styles from './ButtonEdit.module.css';

const ButtonEdit = ({ path }: { path: string }) => {
  return (
    <Link className={styles.linkBtn} to={path}>
      <button className={styles.btn} />
    </Link>
  );
};

ButtonEdit.displayName = 'ButtonEdit';
export default ButtonEdit;
