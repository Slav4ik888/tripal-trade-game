import * as React from 'react';


export const useOnceCall = (func) => {
  const [state, setState] = React.useState(false);

  const execute = () => setState(prev => {
    console.log('PREV: ', prev);
    !prev && func()
      
    return true
  });

  return { execute }
};
