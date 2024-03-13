import { Select } from '../../commons/forms';
import { Search } from '../../commons/Search';
import { sortSelectionList } from '../../../utils/modules';
import styles from './ListControlPanel.module.css';

const ListControlPanel = () => {
  return (
    <section className={styles.wrapper}>
      <Search />
      <Select label='Сортировать от:' listOptions={sortSelectionList} />
    </section>
  );
};

ListControlPanel.displayName = 'ListControlPanel';
export default ListControlPanel;
