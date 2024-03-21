import React from 'react';
import { MiddleTitle } from '../titles';
import { ButtonModal } from '../buttons';
import styles from './ModalWindow.module.css';
import { ModalWindowPropsType } from '../../../types/customType';

const ModalWindow = ({
  title,
  content,
  modalButtonData,
}: ModalWindowPropsType) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <MiddleTitle title={title} />
          <p className={styles.content}>{content}</p>
          <div className={styles.buttons}>
            {modalButtonData.map(({ nameBtn, onClick, link }, index) => {
              return (
                <ButtonModal
                  key={index}
                  nameBtn={nameBtn}
                  onClick={onClick}
                  link={link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

ModalWindow.displayName = 'ModalWindow';
export default React.memo(ModalWindow);
