import { getScheme } from "../../get-scheme";



export const setValue = (group, value, scheme) => {
  const { field1, field2, field3, field4 } = getScheme(scheme);

  if (field4) {
    if (typeof group?.[field1] === `undefined`) group[field1] = {};
    if (typeof group?.[field1]?.[field2] === `undefined`) group[field1][field2] = {};
    if (typeof group?.[field1]?.[field2]?.[field3] === `undefined`) group[field1][field2][field3] = {};

    group[field1][field2][field3][field4] = value;
  }

  else if (field3) {
    if (typeof group?.[field1] === `undefined`) group[field1] = {};
    if (typeof group?.[field1]?.[field2] === `undefined`) group[field1][field2] = {};

    group[field1][field2][field3] = value;
  }
    
  else if (field2) {
    if (typeof group?.[field1] === `undefined`) group[field1] = {};
    
    group[field1][field2] = value;
  }
    
  else if (field1) group[field1] = value;
};
