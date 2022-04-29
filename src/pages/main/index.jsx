import React, { useState } from 'react';
// Components
import Container from '../../components/container';
import Slider from '../../components/slider';
import Heading from '../../components/heading';
import CharacterCard from '../../components/character-card';
import Biography from '../biography';
// Consts & Styles
import s from './index.module.scss';
import { CHARACTERS } from '../../assets/characters.js';


export const Main = () => {

  const [characters, setCharacters] = useState(CHARACTERS);

  const [bioId, setBioId] = useState(null);

  const handleRead = (id) => setBioId(id);
  const handleBack = () => setBioId(null);

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

  let content;
  if (bioId) content = <Biography id={bioId} onBackClick={handleBack} />;

  else content = <>
    <Slider />
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
                id={item.id}
                name={item.name}
                src={item.thumbnail.path}
                description={item.description}
                humanName={item.humanName}
                isLike={item.isLike}
                onLike={handleLike}
                onRead={handleRead}
              />
            </div>)
          }
        </div>
      </Container>
    </section>
  </>;

  return (
    <div className="App">
      {content}
    </div>
  )
};
