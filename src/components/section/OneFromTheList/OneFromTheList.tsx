import React from 'react';
import { Radio } from '../../commons/forms';
import { ModalWindow } from '../../commons/ModalWindow';
import { SmallTitle } from '../../commons/titles';
import { pathList } from '../../../utils/modules';
import styles from './OneFromTheList.module.css';
import { AnswersOptionsType, TestDataPropsType } from '../../../types/customType';

const OneFromTheList = ({
  testData,
  testName,
}: {
  testData: TestDataPropsType[];
  testName: string;
}) => {
  // значение радиокнопки
  const [radioButtonValue, setRadioButtonValue] = React.useState('');
  // счетчик вопросов
  const [questionCounter, setQuestionCounter] = React.useState(1);
  // конец вопросов
  const [isEndOfQuestions, setIsEndOfQuestions] = React.useState(false);
  // счетчик правильных ответов
  const [counterCorrectAnswers, setCounterCorrectAnswers] = React.useState(0);
  const [modalIsActive, setModalIsActive] = React.useState(false);

  // (количество вопросов, вопрос, варианты ответов, правильный ответ)
  const { numberOfQuestions, question, answersOptions, rightAnswer } =
    React.useMemo(() => {
      return {
        numberOfQuestions: testData.length,
        question: testData[questionCounter - 1].question,
        answersOptions: testData[questionCounter - 1].answersOptions,
        rightAnswer: testData[questionCounter - 1].rightAnswer,
      };
    }, [testData, questionCounter]);

  // функция, изменения значения радиокнопки
  const handleRadioChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRadioButtonValue(event.target.value);
    },
    []
  );

  // функция, обработать общее действие
  const handleCommonActions = React.useCallback(() => {
    // проверяем, это конец вопросов
    setIsEndOfQuestions(questionCounter === numberOfQuestions);
    // очищаем поле радио
    setRadioButtonValue('');

    if (radioButtonValue === rightAnswer) {
      setCounterCorrectAnswers(counterCorrectAnswers + 1);
    }
  }, [
    questionCounter,
    numberOfQuestions,
    radioButtonValue,
    rightAnswer,
    counterCorrectAnswers,
  ]);

  // функция, обработать следующий тест
  const handleNextTest = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      // если счетчик вопросов меньше количества вопросов
      if (questionCounter < numberOfQuestions) {
        handleCommonActions();
        // переход к следующему вопросу
        setQuestionCounter(questionCounter + 1);
      } else if (questionCounter === numberOfQuestions) {
        handleCommonActions();
        setModalIsActive(true);
      }
    },
    [handleCommonActions, numberOfQuestions, questionCounter]
  );

  // функция, обработать завершение теста
  const handleTestCompletion = React.useCallback(() => {
    // очищаем поле радио
    setRadioButtonValue('');
    setModalIsActive(true);
  }, []);

  // данные модального окна
  const modalWindowData = React.useMemo(
    () => ({
      title: testName,
      content: `Количество правильных ответов - ${counterCorrectAnswers}`,
      modalButtonData: [
        {
          nameBtn: 'Вернуться к списку тестов',
          link: `${pathList.testsListPage}`,
        },
      ],
    }),
    [testName, counterCorrectAnswers]
  );

  return (
    <section className={styles.wrapper}>
      <fieldset className={styles.inner}>
        <SmallTitle title={question} />
        {answersOptions.map((item: AnswersOptionsType) => {
          return (
            <Radio
              key={item.id}
              id={item.id}
              value={item.value}
              text={item.answer}
              checked={!isEndOfQuestions && item.value === radioButtonValue}
              onChange={handleRadioChange}
            />
          );
        })}
        <button
          className={styles.btnNext}
          onClick={handleNextTest}
          disabled={isEndOfQuestions || radioButtonValue === ''}
        >
          Далее
        </button>
      </fieldset>
      <button className={styles.btnComplete} onClick={handleTestCompletion}>
        Завершить тест
      </button>
      {modalIsActive && <ModalWindow {...modalWindowData} />}
    </section>
  );
};

OneFromTheList.displayName = 'OneFromTheList';
export default React.memo(OneFromTheList);
