import React from 'react';
import styles from './Select.module.css';
import { SelectPropsType } from '../../../../types/customType';

const Select = ({ label, listOptions }: SelectPropsType) => {
  const selectRef = React.useRef<HTMLLIElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(-1);
  const [currentOptionName, setCurrentOptionName] = React.useState('');
  const [openDropdownList, setOpenDropdownList] = React.useState(false);

  // функция, обработать раскрывающийся список
  const handleDropdownList = React.useCallback(() => {
    setOpenDropdownList(!openDropdownList);
  }, [openDropdownList]);

  // функция, обработать выбор
  const handleSelection = React.useCallback(
    (e: React.MouseEvent<HTMLLIElement>, index: number) => {
      // оператор instanceof позволяет проверить, принадлежит ли объект указанному классу
      if (e.target instanceof HTMLLIElement) {
        // присваиваем текущее имя выбора
        setCurrentOptionName(e.target.innerText);
        // присваиваем индекс выбора
        setCurrentIndex(index);
        // закрываем dropdownList
        setOpenDropdownList(false);
      }
    },
    []
  );

  // выпадающий список
  const dropdownList = React.useMemo(() => {
    return (
      openDropdownList && (
        <ul className={styles.dropdownList}>
          {listOptions.map((item, index) => {
            return (
              <li
                ref={selectRef}
                key={index}
                className={`${styles.option} ${
                  currentIndex === index && styles.active
                }`}
                onClick={(e) => {
                  handleSelection(e, index);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )
    );
  }, [currentIndex, handleSelection, listOptions, openDropdownList]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <button
          className={`${styles.btn} ${openDropdownList && styles.right}`}
          onClick={handleDropdownList}
        />
        <span className={styles.label}>{label}</span>
        <span className={styles.currentOption}>{currentOptionName}</span>
      </div>
      {dropdownList}
    </div>
  );
};

Select.displayName = 'Select';
export default React.memo(Select);
