import { TestDataItemPropsType } from '../types/customType';

export const listTest: TestDataItemPropsType[] = [
  {
    id: '1',
    title:
      'Тест 1: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sit temporibus maiores magni ratione',
    questionType: 'один из списка',
    test: [
      {
        question: 'Выберите одно число из 1-4?',
        answersOptions: [
          { id: '1', value: '1', answer: 'Вариант 1' },
          { id: '2', value: '2', answer: 'Вариант 2' },
          { id: '3', value: '3', answer: 'Вариант 3' },
          { id: '4', value: '4', answer: 'Вариант 4' },
        ],
        rightAnswer: '2',
      },
      {
        question: 'Выберите одно число из 5-8?',
        answersOptions: [
          { id: '5', value: '1', answer: 'Вариант 5' },
          { id: '6', value: '2', answer: 'Вариант 6' },
          { id: '7', value: '3', answer: 'Вариант 7' },
          { id: '8', value: '4', answer: 'Вариант 8' },
        ],
        rightAnswer: '3',
      },
      {
        question: 'Выберите одно число из 9-12?',
        answersOptions: [
          { id: '9', value: '1', answer: 'Вариант 9' },
          { id: '10', value: '2', answer: 'Вариант 10' },
          { id: '11', value: '3', answer: 'Вариант 11' },
          { id: '12', value: '4', answer: 'Вариант 12' },
        ],
        rightAnswer: '2',
      },
      {
        question: 'Выберите одно число из 13-16?',
        answersOptions: [
          { id: '13', value: '1', answer: 'Вариант 13' },
          { id: '14', value: '2', answer: 'Вариант 14' },
          { id: '15', value: '3', answer: 'Вариант 15' },
          { id: '16', value: '4', answer: 'Вариант 16' },
        ],
        rightAnswer: '4',
      },
      {
        question: 'Выберите одно число из 17-20?',
        answersOptions: [
          { id: '17', value: '1', answer: 'Вариант 17' },
          { id: '18', value: '2', answer: 'Вариант 18' },
          { id: '19', value: '3', answer: 'Вариант 19' },
          { id: '20', value: '4', answer: 'Вариант 20' },
        ],
        rightAnswer: '1',
      },
    ],
    dateTime: '21/11/23, 10:00',
  },
  {
    id: '2',
    title: 'Тест 2: Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    questionType: 'один из списка',
    test: [
      {
        question: 'Выберите одно число из 21-24?',
        answersOptions: [
          { id: '21', value: '1', answer: 'Вариант 21' },
          { id: '22', value: '2', answer: 'Вариант 22' },
          { id: '23', value: '3', answer: 'Вариант 23' },
          { id: '24', value: '4', answer: 'Вариант 24' },
        ],
        rightAnswer: '1',
      },
      {
        question: 'Выберите одно число из 25-28?',
        answersOptions: [
          { id: '25', value: '1', answer: 'Вариант 25' },
          { id: '26', value: '2', answer: 'Вариант 26' },
          { id: '27', value: '3', answer: 'Вариант 27' },
          { id: '28', value: '4', answer: 'Вариант 28' },
        ],
        rightAnswer: '3',
      },
      {
        question: 'Выберите одно число из 29-32?',
        answersOptions: [
          { id: '29', value: '1', answer: 'Вариант 29' },
          { id: '30', value: '2', answer: 'Вариант 30' },
          { id: '31', value: '3', answer: 'Вариант 31' },
          { id: '32', value: '4', answer: 'Вариант 32' },
        ],
        rightAnswer: '4',
      },
      {
        question: 'Выберите одно число из 33-36?',
        answersOptions: [
          { id: '33', value: '1', answer: 'Вариант 33' },
          { id: '34', value: '2', answer: 'Вариант 34' },
          { id: '35', value: '3', answer: 'Вариант 35' },
          { id: '36', value: '4', answer: 'Вариант 36' },
        ],
        rightAnswer: '1',
      },
      {
        question: 'Выберите одно число из 37-40?',
        answersOptions: [
          { id: '37', value: '1', answer: 'Вариант 37' },
          { id: '38', value: '2', answer: 'Вариант 38' },
          { id: '39', value: '3', answer: 'Вариант 39' },
          { id: '40', value: '4', answer: 'Вариант 40' },
        ],
        rightAnswer: '2',
      },
    ],
    dateTime: '22/12/23, 11:00',
  },
];
