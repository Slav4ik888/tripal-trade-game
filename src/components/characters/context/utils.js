import * as LS from '../../../utils/local-storage';
import { CHARACTERS } from '../../../assets/characters';

export const fillCharacters = () => {
  const LSLikes = LS.getCharactersLikes() || [];

  return CHARACTERS.map(item => ({
    ...item,
    isLike: LSLikes?.[LSLikes?.findIndex(it => it.id === item.id)].isLike || item.isLike
  }));
};

export const getLikes = (characters) => characters.map(item => ({ id: item.id, isLike: item.isLike }));
