import React, { useState } from 'react'
import pt from 'prop-types';
import cl from 'classnames';
import Heading from '../heading';
import Text from '../text';
import { ReactComponent as Like } from './assets/heart.svg';
import s from './index.module.scss';


function ChapterCard({ id, name, src, humanName, description, isLike, onLike }) {

  const handleClick = () => {
    onLike(id);
  };

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
            <a href="#">Read bio</a>
          </div>
        </div>
      </div>
    </div>
  )
};

ChapterCard.defaultProps = {
  isLike: false
};

ChapterCard.propTypes = {
  id          : pt.number.isRequired,
  name        : pt.string.isRequired,
  src         : pt.string.isRequired,
  humanName   : pt.string.isRequired,
  description : pt.string.isRequired,
  isLike      : pt.bool,
  onLike      : pt.func.isRequired
};

export default ChapterCard;
