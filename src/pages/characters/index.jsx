import React, { useEffect } from 'react';
// Router
import { useMatch } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike, selectCards  } from '../../store/characters';
// Components
import Heading from '../../components/heading';
import Text from '../../components/text';
import CharacterCard from '../../components/characters/character-card';
import Button from '../../components/btns/button';
// Functions
import * as LS from '../../utils/local-storage';
import { useCreateCharacterMutation, useDeleteCharacterMutation, useFetchAllCharactersQuery, useUpdateCharacterMutation } from '../../services/characters-api';
// Consts & Styles
import s from './index.module.scss';
import { btnType } from '../../utils/types';
import { newCharacter } from './new-character';


    
export const CharactersPage = () => {
  const
    match = useMatch({ path: `/` }),
    dispatch = useDispatch(),
    cards = useSelector(selectCards),
    { isLoading, data, error, refetch } = useFetchAllCharactersQuery(10, {
      // pollingInterval: 1000 // С какой периодичностью запрашивать данные
    }),
    // refetch - может принудительно запросить данные
    [create, { error: errorCreate, isLoading: isLoadingCreate }] = useCreateCharacterMutation();  
    
  // useEffect(() => {
  //   console.log(`useEffect fetch`);
  //   dispatch(thunkFetchHeroes());
  // }, []);

  useEffect(() => {
    LS.setCards(cards);
  }, [cards]);

  const handlerLike = (id) => dispatch(toggleLike(id));

  const handlerCreate = async () => await create(newCharacter());



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

      <Button typeBtn={btnType.black} onClick={handlerCreate}>Add</Button>

      <div className={s.cardWrap}>
        {
          isLoading && <Heading>Loading...</Heading>
        }
        {
          error && <Text>{error}</Text>
        }
        {
          data?.map(item => <div key={item.id}>
            <CharacterCard
              id          = {item.id}
              name        = {item.name}
              src         = {item.thumbnail.path}
              description = {item.description}
              humanName   = {item.humanName}
              isLike      = {cards[item.id]}
              onLike      = {handlerLike}
            />
          </div>)
        }
      </div>
    </section>
  )
};

export default CharactersPage;
