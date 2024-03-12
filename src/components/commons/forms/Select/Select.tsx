import React from 'react';
import styles from './Select.module.css';

const Select = () => {
  const selectRef = React.useRef<HTMLLIElement>(null);
  const [selectionList] = React.useState(['старых к новым', 'новых к старым']);
  const [styleMap] = React.useState({
    [selectionList[0]]: styles.up,
    [selectionList[1]]: styles.down,
  });
  const [currentIndex, setCurrentIndex] = React.useState(1);
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

  // стиль направления стрелки
  const arrowDirectionStyle = React.useMemo(() => {
    return styleMap[currentOptionName] || styles.right;
  }, [currentOptionName, styleMap]);

  // выпадающий список
  const dropdownList = React.useMemo(() => {
    return (
      openDropdownList && (
        <ul className={styles.dropdownList}>
          {selectionList.map((item, index) => {
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
  }, [currentIndex, handleSelection, openDropdownList, selectionList]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <button
          className={`${styles.btn} ${arrowDirectionStyle}`}
          onClick={handleDropdownList}
        />
        <span className={styles.label}>Сортировать от:</span>
        <span className={styles.currentOption}>{currentOptionName}</span>
      </div>
      {dropdownList}
    </div>
  );
};

Select.displayName = 'Select';
export default Select;
