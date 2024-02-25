import React from 'react';
import images from '../../../assets/images/fav_icons/logo192.png';
import styles from './Logo.module.css';

const Logo = () => {
  return <img className={styles.images} src={images} alt='images' />;
};

Logo.displayName = 'Logo';
export default React.memo(Logo);
