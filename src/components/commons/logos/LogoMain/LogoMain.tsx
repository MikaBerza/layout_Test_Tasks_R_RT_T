import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images/fav_icons/logo192.png';
import styles from './LogoMain.module.css';

const LogoMain = () => {
  return (
    <Link to='/layout_Test_Tasks_R_RT_T'>
      <img className={styles.images} src={images} alt='images' />
    </Link>
  );
};

LogoMain.displayName = 'LogoMain';
export default React.memo(LogoMain);
