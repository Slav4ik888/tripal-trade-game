/**
 * Возвращает клон объекта
 * @param {object} obj 
 */
export const cloneObj = (obj) => {
  if (!obj) return {};
  
  const newObj = JSON.stringify(obj);
  return JSON.parse(newObj);
};
