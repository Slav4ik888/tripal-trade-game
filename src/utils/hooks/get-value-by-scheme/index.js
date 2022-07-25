import { getScheme } from "../get-scheme";


/**
 * @return value by scheme
 */
export function getValueByScheme(G, scheme) {
  const { field1, field2, field3, field4 } = getScheme(scheme);

  if      (field4) return G?.group?.[field1]?.[field2]?.[field3]?.[field4]
  else if (field3) return G?.group?.[field1]?.[field2]?.[field3]
  else if (field2) return G?.group?.[field1]?.[field2]
  else if (field1) return G?.group?.[field1]
  return undefined;
}
