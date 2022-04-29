import React, { useState } from 'react';
// Components
import Container from '../../components/container';
import Heading from '../../components/heading';
import CharacterCard from '../../components/character-card';
// Consts & Styles
import s from './index.module.scss';
import { CHARACTERS } from '../../assets/characters.js';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../utils/types';


export const Characters = () => {

  const
    navigate = useNavigate(),
   [characters, setCharacters] = useState(CHARACTERS);

  const handleRead = (id) => navigate(`${Path.BIO}/${id}`);

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
      <Container>
        <div className={s.cardTitle}>
          <Heading backLine>
            Marvel Cards
          </Heading>
          <Heading level={2}>
            Collect your best five
          </Heading>
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
                onRead      = {handleRead}
              />
            </div>)
          }
        </div>
      </Container>
    </section>
  )
};

export default Characters;
