import React from 'react';
import { Select } from '../../commons/forms';
import { Search } from '../../commons/Search';
import styles from './ListControlPanel.module.css';

const ListControlPanel = () => {
  return (
    <section className={styles.wrapper}>
      <Search />
      <Select />
    </section>
  );
};

ListControlPanel.displayName = 'ListControlPanel';
export default ListControlPanel;
