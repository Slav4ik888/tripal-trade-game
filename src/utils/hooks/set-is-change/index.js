

export function setChanges(G) {
  G && !G.changes && G.setChanges(true);
};
