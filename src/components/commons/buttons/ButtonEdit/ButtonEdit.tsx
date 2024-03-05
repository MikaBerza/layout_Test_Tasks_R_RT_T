import { Link } from 'react-router-dom';
import pencelImg from '../../../../assets/images/pencil.png';
import styles from './ButtonEdit.module.css';

const ButtonEdit = ({ path }: { path: string }) => {
  return (
    <Link to={path}>
      <img className={styles.pencel} src={pencelImg} alt='img' />
    </Link>
  );
};

ButtonEdit.displayName = 'ButtonEdit';
export default ButtonEdit;
