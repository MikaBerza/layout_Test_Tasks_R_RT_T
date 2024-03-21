import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { Header } from '../../commons/Header';
import { MainTitle } from '../../commons/titles';
import { OneFromTheList } from '../../section';
import { Footer } from '../../commons/Footer';
import styles from './TestPage.module.css';

const TestPage = () => {
  // данные элемента списка тестов
  const { testListItemData } = useAppSelector(
    (state: RootState) => state.loginFormSlice
  );
  // количество вопросов
  const [numberOfQuestions] = React.useState(testListItemData.test.length - 1);
  // текущий номер вопроса
  const [currentQuestionNumber, setCurrentQuestionNumber] = React.useState(0);
  // массив ответов пользователя
  const [userAnswersArray, setUserAnswersArray] = React.useState([]);
  // количество верных ответов
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = React.useState(0);
  // тест завершен
  const [testFinished, setTestFinished] = React.useState(false);

  // блок данных теста (вопрос, варианты ответов, правильный ответ)
  const testDataBlock = React.useMemo(() => {
    return {
      question: testListItemData.test[currentQuestionNumber].question,
      answersOptions:
        testListItemData.test[currentQuestionNumber].answersOptions,
      rightAnswer: testListItemData.test[currentQuestionNumber].rightAnswer,
    };
  }, [currentQuestionNumber, testListItemData.test]);

  // показать результат теста
  const showResultTest = React.useMemo(() => {
    if (testFinished) {
      const result = userAnswersArray.reduce((sum, elem) => sum + elem, 0);
      setNumberOfCorrectAnswers(result);
      return <h2>Количество верных ответов: {numberOfCorrectAnswers}</h2>;
    }
  }, [numberOfCorrectAnswers, testFinished, userAnswersArray]);

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <MainTitle title='Тест' />
        {testFinished && showResultTest}
        <div className={styles.inner} key={testListItemData.id}>
          <h3 className={styles.title}>{testListItemData.title}</h3>
          <OneFromTheList
            question={testDataBlock.question}
            answersOptions={testDataBlock.answersOptions}
            rightAnswer={testDataBlock.rightAnswer}
            //
            numberOfQuestions={numberOfQuestions}
            currentQuestionNumber={currentQuestionNumber}
            setCurrentQuestionNumber={setCurrentQuestionNumber}
            //
            userAnswersArray={userAnswersArray}
            setUserAnswersArray={setUserAnswersArray}
            //
            setTestFinished={setTestFinished}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

TestPage.displayName = 'TestPage';
export default React.memo(TestPage);
