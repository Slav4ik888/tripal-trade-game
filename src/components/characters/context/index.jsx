import React, { useState } from 'react';
import pt from 'prop-types';
import * as LS from '../../../utils/local-storage';
import { fillCharacters, getLikes } from './utils';


export const CharactersContext = React.createContext(null);


export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState(fillCharacters);

  const handleLike = (id) => {
    setCharacters(prev => {
      
      const newCharacters = prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isLike: !item.isLike
          }
        }
        return item
      });

      LS.setCharactersLikes(getLikes(newCharacters));
      return newCharacters
    })
  };

  return (
    <CharactersContext.Provider value={{ characters, onLike: handleLike }}>
      {children}
    </CharactersContext.Provider>
  )
};

CharactersProvider.propTypes = {
  children: pt.node.isRequired
};
