import React, { useState } from 'react';
import { useMatch, useLocation } from 'react-router-dom';
// Components
import Heading from '../../components/heading';
import CharacterCard from '../../components/character-card';
// Consts & Styles
import s from './index.module.scss';
import { CHARACTERS } from '../../assets/characters.js';


export const Characters = () => {
  const
    match    = useMatch({ path: `/` }),
    location = useLocation(),
    [characters, setCharacters] = useState(CHARACTERS);
  
  const handleLike = (id) => {
    setCharacters(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isLike: !item.isLike
        }
      }
      return item
    }));
  };

  return (
    <section className={s.cardSection}>
      <div className={s.cardTitle}>
        {
          match !== null
            ? (<>
                <Heading backLine>
                  Marvel Cards
                </Heading>
                <Heading level={2}>
                  Collect your best five
                </Heading>
              </>)
            : (<Heading backLine>Characters</Heading>)
        }
      </div>

      <div className={s.cardWrap}>
        {
          characters?.map(item => <div key={item.id}>
            <CharacterCard
              id          = {item.id}
              name        = {item.name}
              src         = {item.thumbnail.path}
              description = {item.description}
              humanName   = {item.humanName}
              isLike      = {item.isLike}
              onLike      = {handleLike}
            />
          </div>)
        }
      </div>
    </section>
  )
};

export default Characters;
