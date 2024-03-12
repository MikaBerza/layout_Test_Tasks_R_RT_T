import React from 'react';
import { InputField } from '../forms';
import styles from './Search.module.css';

const Search = () => {
  const [valueSearch, setValueSearch] = React.useState('');
  const isValueValid = React.useMemo(
    () => valueSearch.trim().length > 0,
    [valueSearch]
  );

  // функция, обработать изменения поля поиска
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValueSearch(e.target.value);
    },
    []
  );

  // функция, обработать очищение поля поиска
  const handleClear = React.useCallback(() => {
    setValueSearch('');
  }, []);

  // функция, обработать поиск
  const handleSearch = React.useCallback(() => {
    setValueSearch('');
    // тут еще нужно дописать логику поиска
  }, []);

  return (
    <div className={styles.wrapper}>
      <InputField
        name='search'
        type='search'
        id='search'
        placeholder='Поиск'
        onChange={handleChange}
        value={valueSearch}
      />
      {isValueValid && (
        <button className={styles.btnCross} onClick={handleClear} />
      )}
      <button
        className={styles.btnSearch}
        onClick={handleSearch}
        disabled={!isValueValid}
      >
        Искать
      </button>
    </div>
  );
};

Search.displayName = 'Search';
export default Search;
