import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../../assets/images/testLogo.png';
import styles from './LogoMain.module.css';

const LogoMain = () => {
  return (
    <Link to='/layout_Test_Tasks_R_RT_T'>
      <img className={styles.image} src={image} alt='images' />
    </Link>
  );
};

LogoMain.displayName = 'LogoMain';
export default React.memo(LogoMain);
