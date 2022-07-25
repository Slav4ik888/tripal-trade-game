import { setValue } from "./set-value";


export function changeGroup(G, tuple, noChanges) {
  if (!G || !G.group || !tuple.length) return null;

  const newGroup = Object.assign({}, G.group);
  
  tuple.forEach(v => setValue(newGroup, v.value, v.scheme))

  G.updateGroup(newGroup, noChanges);
}
