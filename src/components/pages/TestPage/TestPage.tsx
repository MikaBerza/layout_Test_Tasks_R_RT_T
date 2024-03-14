import React from 'react';
import { Header } from '../../commons/Header';
import { TitleMain } from '../../commons/titles';
import { Footer } from '../../commons/Footer';
import styles from './TestPage.module.css';
//
const TestPage = () => {
  const [selectedAnswer, setSelectedAnswer] = React.useState('');

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const answer: any = formData.get('radio');
    setSelectedAnswer(answer);
  };

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TitleMain title='Тест' />

        <form onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>Вопрос</legend>
            <label>
              <input type='radio' name='radio' value='1' /> Ответ 1
            </label>
            <label>
              <input type='radio' name='radio' value='2' /> Ответ 2
            </label>
            <label>
              <input type='radio' name='radio' value='3' /> Ответ 3
            </label>
            <label>
              <input type='radio' name='radio' value='4' /> Ответ 4
            </label>
            <button type='submit'>Submit</button>
          </fieldset>
          {selectedAnswer && <p>Выбранный ответ: {selectedAnswer}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
};

TestPage.displayName = 'TestPage';
export default TestPage;
