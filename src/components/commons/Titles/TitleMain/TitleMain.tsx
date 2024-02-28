import styles from './TitleMain.module.css';

const TitleMain = ({ textTitle }: { textTitle: string }) => {
  return <h1 className={styles.title}>{textTitle}</h1>;
};

TitleMain.displayName = 'TitleMain';
export default TitleMain;
