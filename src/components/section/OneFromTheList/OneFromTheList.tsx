import React from 'react';
import { Radio } from '../../commons/forms';
import styles from './OneFromTheList.module.css';

const OneFromTheList = ({
  question,
  answersOptions,
  rightAnswer,
  //
  numberOfQuestions,
  currentQuestionNumber,
  setCurrentQuestionNumber,
  //
  userAnswersArray,
  setUserAnswersArray,
  //
  setTestFinished,
}: {
  question: string;
  answersOptions: {
    id: string;
    value: string;
    answer: string;
  }[];
  rightAnswer: string;
  //
  numberOfQuestions: number;
  currentQuestionNumber: number;
  setCurrentQuestionNumber: any;
  //
  userAnswersArray: string[];
  setUserAnswersArray: any;
  //
  setTestFinished: any;
}) => {
  const [currentValue, setCurrentValue] = React.useState('');
  const [flag, setFlag] = React.useState(false);

  // обработчик изменения значения радиокнопки
  const handleRadioChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentValue(event.target.value);
    },
    []
  );

  // обработчик клика по кнопки
  const handleClick = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      if (currentQuestionNumber < numberOfQuestions) {
        setCurrentQuestionNumber(currentQuestionNumber + 1);
        // если ответ верный 1, нет 0, чтобы потом удобнее считать
        setUserAnswersArray([
          ...userAnswersArray,
          currentValue === rightAnswer ? 1 : 0,
        ]);
        setCurrentValue('');
      } else if (currentQuestionNumber === numberOfQuestions) {
        // если ответ верный 1, нет 0, чтобы потом удобнее считать
        setUserAnswersArray([
          ...userAnswersArray,
          currentValue === rightAnswer ? 1 : 0,
        ]);
        setTestFinished(true);
        setCurrentValue('');
        setFlag(true);
      }
    },
    [
      currentQuestionNumber,
      currentValue,
      numberOfQuestions,
      rightAnswer,
      setCurrentQuestionNumber,
      setTestFinished,
      setUserAnswersArray,
      userAnswersArray,
    ]
  );

  return (
    <section className={styles.wrapper}>
      <form>
        <fieldset>
          <legend>{question}</legend>
          {answersOptions.map(({ id, value, answer }) => {
            return (
              <Radio
                key={id}
                id={id}
                value={value}
                text={answer}
                checked={value === currentValue ? true : false}
                onChange={handleRadioChange}
              />
            );
          })}
          <button
            type='submit'
            onClick={handleClick}
            disabled={flag || currentValue === ''}
          >
            Вперед
          </button>
        </fieldset>
      </form>
    </section>
  );
};

OneFromTheList.displayName = 'OneFromTheList';
export default React.memo(OneFromTheList);
