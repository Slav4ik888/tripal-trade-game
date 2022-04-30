import { updateObject } from '../update-object/index.js';

export const updateArrWithItemByField = (items, field, updateItem, flags) => {
  let newItems = [];

  // Если нет массива items, то создаём его
  if (!items) { 
    newItems.push(updateItem);
    return newItems;
  }

  const idx = items.findIndex((item) => item[field] === updateItem[field]);
  newItems = [...items];

  // Если есть - обновляем
  if (idx !== -1) { 

    // Если указан флаг, обрабатываем
    if (flags?.includes(`update`)) {
      updateItem = updateObject(items[idx], updateItem);
    }

    newItems = [...newItems.slice(0, idx), updateItem, ...newItems.slice(idx + 1)];
  
  } else { // Нету - добавляем
    newItems.push(updateItem);
  }

  return newItems;
};
