import { PathListType, UserDataType } from '../types/customType';
// scope-key
export const token: string = 'hf7DT<mw';
// шаблоны для проверки
export const patternLogo: string = '[A-Za-z]{6,8}';
export const patternPassword: string = '[0-9]{6,8}';
// список путей к страницам
export const pathList: PathListType = {
  homePage: '/home-page',
  registration: '/home-page/registration',
  authorization: '/home-page/authorization',
  testsListPage: '/home-page/tests-list-page',
  testPage: '/home-page/tests-list-page/test-page/:testId',
  errorPage: '/home-page/error',
  githubPage: 'https://github.com/MikaBerza',
};
// список выбора сортировки
export const sortSelectionList: string[] = ['старых к новым', 'новых к старым'];
// список выбора типа вопроса
export const questionTypeSelectionList: string[] = [
  'один из списка',
  'несколько из списка',
  'численный ответ',
];

// функция, получить строку параметров запроса
export const getQueryParametersString = (userData: UserDataType) => {
  // URLSearchParam - это интерфейс, определяет служебные методы для работы со строкой запроса URL-адреса
  // создаём экземпляр класса параметров поиска
  const params = new URLSearchParams();
  let paramsSting: string | null = null;
  // преобразуем объект userData в массив пар ключ-значение
  Object.entries(userData).forEach(([key, value]) => {
    if (value !== undefined) {
      // добавляем пару ключ-значение в объект URLSearchParams
      params.append(key, value.toString());
      // преобразует значение в строку перед добавлением
      paramsSting = params.toString();
    }
  });
  return paramsSting;
};
