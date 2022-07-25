
export const selectModule = (state) => state.counter;
export const selectValue  = (state) => selectModule(state).value;
