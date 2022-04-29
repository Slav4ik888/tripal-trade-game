import React from 'react';
import Container from '../../components/container';
import Text from '../../components/text';
import photo from '../../assets/slava.jpeg';
import s from './index.module.scss';


export const Contacts = () => {

  return (
    <Container className={s.root}>
      <Text children="My name is Slava, I`m learning React and made this game." />
      <img src={photo} alt="Slava" className={s.photo} />
    </Container>
  )
};

export default Contacts;
