import React from 'react'
import pt from 'prop-types';
// Router
import { Link } from 'react-router-dom';
import { btnType, Path } from '../../../utils/types';
// Components
import Heading from '../../heading';
import Text from '../../text';
import Button from '../../btns/button';
// Functions
import cl from 'classnames';
import { useDeleteCharacterMutation, useUpdateCharacterMutation } from '../../../services/characters-api';
// Styles
import { ReactComponent as Like } from './assets/heart.svg';
import s from './index.module.scss';



const toggleUpdate = (name) => {
  const idx = name.indexOf(`Updated`);
  if (idx !== -1) return name.slice(0, idx)
  return name + ` Updated`
};


function CharacterCard({ id, name, src, humanName, description, isLike, onLike }) {

  const
    [update] = useUpdateCharacterMutation(),
    [del] = useDeleteCharacterMutation();

  
  const handleClick = () => onLike && onLike(id);
  const handlerUpdate = async () => {
    console.log('toggleUpdate: ', toggleUpdate);
    await update({ id, name: toggleUpdate(name) });
  };

  const handlerDelete = async () => await del({ id });


  return (
    <div className={s.root}>
      <img src={src} alt={name} className={s.cardImage}/>
      <div className={s.cardDetails}>
        <Heading className={s.cardName} level={2}>
          {name}
        </Heading>
        <Heading className={s.cardHumanName} level={4}>
          {humanName}
        </Heading>
        <Text className={s.cardDescription}>
          {description}
        </Text>

        <div className={s.cardMeta}>
          <div
            className={cl({ [s.active]: isLike }, s.like)}
            onClick={handleClick}
          >
            <Like />
          </div>
          <div className={s.readBio}>
            <Link to={`/${Path.CHARACTERS}/${id}`}>Read bio</Link>
          </div>
        </div>

        <div className={s.box}>
          <Button typeBtn={btnType.black} onClick={handlerDelete}>Delete</Button>
          <Button typeBtn={btnType.black} onClick={handlerUpdate}>Update</Button>
        </div>
      </div>
    </div>
  )
};

CharacterCard.defaultProps = {
  isLike: false
};

CharacterCard.propTypes = {
  id          : pt.number.isRequired,
  name        : pt.string.isRequired,
  src         : pt.string.isRequired,
  humanName   : pt.string.isRequired,
  description : pt.string.isRequired,
  isLike      : pt.bool,
  onLike      : pt.func.isRequired
};

export default CharacterCard;
