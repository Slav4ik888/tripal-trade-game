
export const selectModule      = (state) => state.characters;
export const selectLoading     = (state) => selectModule(state).loading;
export const selectError       = (state) => selectModule(state).error;
export const selectCharacters  = (state) => selectModule(state).data;
export const selectCards       = (state) => selectModule(state).cards;
