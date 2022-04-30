
export const getItemFromArrByField = (arr, field, value) => {
  return arr?.find((item) => item[field] === value);
};
