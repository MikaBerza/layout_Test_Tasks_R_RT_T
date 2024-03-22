import { BounceLoader } from 'react-spinners';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <BounceLoader size={100} color='#A6A6A6' />
    </div>
  );
};

Loading.displayName = 'Loading';
export default Loading;
