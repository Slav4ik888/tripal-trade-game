/**
 * Возвращает item с соответствующим полем field === value
 * @param {array} arr 
 * @param {string} field - `id` || `email` || any
 * @param {string || number} value 
 */
export function getItemFromArrByField<T>(arr: Array<T>, field: string, value: string | number): T;
