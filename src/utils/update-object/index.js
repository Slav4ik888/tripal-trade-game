import { cloneObj } from '../clone-obj/index.js';

// Возвращает новый объект lastObj с обновлёнными полями из updateItem
export const updateObject = (lastObj, updatedFields) => {
  if (!lastObj && !updatedFields) return {};
  if (lastObj && !updatedFields) return lastObj;
  if (!lastObj && updatedFields) return updatedFields;

  let newObj = cloneObj(lastObj);

  for (let key in updatedFields) {
    if (Object.prototype.hasOwnProperty.call(updatedFields, key)) {
      newObj[key] = updatedFields[key];
    }
  };

  return newObj;
};
