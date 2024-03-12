import { pathListType, userDataType } from '../types/customType';
// scope-key
export const token: string = 'hf7DT<mw';
// шаблоны для проверки
export const patternLogo: string = '[A-Za-z]{6,8}';
export const patternPassword: string = '[0-9]{6,8}';
// список путей к страницам
export const pathList: pathListType = {
  homePage: '/home-page',
  registration: '/home-page/registration',
  authorization: '/home-page/authorization',
  testsListPage: '/home-page/tests-list-page',
  errorPage: '/home-page/error',
  githubPage: 'https://github.com/MikaBerza',
};
// функция, получить строку параметров запроса
export const getQueryParametersString = (userData: userDataType) => {
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
