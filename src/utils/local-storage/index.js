// Вывод ошибки в консоль
const showError = (text, fieldName) => console.log(`${text}: ${fieldName}`);


// Проверка на ошибку
// Вывод ошибки
// Ответ есть ли ошибка - true при наличии
const checkError = (data, fieldName) => {
  if (!data) {
    showError(`Не указано значение`, fieldName);
    return true;
  }
  return false;
};


const PREFIX = `TTG`;

/**
 * Сохраняем в LocalStorage
 * 
 * @param {string} storageName 
 * @param {any} data 
 * @returns 
 */
export const setStorageData = (storageName, data) => {
  if (checkError(storageName, `"Имя хранилища"`)) return;
  if (checkError(data, `"Данные для сохранения"`)) return;

  localStorage.setItem(PREFIX + storageName, JSON.stringify(data));
};



/**
 * Достаём из LocalStorage
 * @param {string} storageName
 * @returns 
 */
export const getStorageData = (storageName) => {
  if (checkError(storageName, `"Имя хранилища"`)) return;

  let data = localStorage.getItem(PREFIX + storageName);
  if (data) data = JSON.parse(data);
  return data;
};

export const names = {
  charactersLikes: `charactersLikes`
};

export const setCharactersLikes = (charactersLikes) => setStorageData(names.charactersLikes, charactersLikes);
export const getCharactersLikes = () => getStorageData(names.charactersLikes);
