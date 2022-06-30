import React, { useContext } from 'react';
import { useMatch } from 'react-router-dom';
// Components
import Heading from '../../components/heading';
import CharacterCard from '../../components/characters/character-card';
// Consts & Styles
import s from './index.module.scss';
import { CharactersContext } from '../../components/characters/context';


export const CharactersPage = () => {
  const
    match = useMatch({ path: `/` }),
    { characters, onLike } = useContext(CharactersContext);
  

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
              onLike      = {onLike}
            />
          </div>)
        }
      </div>
    </section>
  )
};

export default CharactersPage;
