import React from 'react';
import { Link } from 'react-router-dom';
import { pathList } from '../../../../utils/modules';
import image from '../../../../assets/images/logoMain.png';
import styles from './LogoMain.module.css';

const LogoMain = () => {
  return (
    <Link to={pathList.homePage}>
      <img className={styles.image} src={image} alt='images' />
    </Link>
  );
};

LogoMain.displayName = 'LogoMain';
export default React.memo(LogoMain);
