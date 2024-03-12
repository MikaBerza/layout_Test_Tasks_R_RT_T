import React from 'react';
import { Select } from '../../commons/forms';
import { Search } from '../../commons/Search';
import styles from './ListControlPanel.module.css';

const ListControlPanel = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.btn}>
          <button>Создать тест</button>
        </div>
        <Search />
        <Select />
      </div>
    </div>
  );
};

ListControlPanel.displayName = 'ListControlPanel';
export default ListControlPanel;
