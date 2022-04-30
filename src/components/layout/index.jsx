import React from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import Header from '../header';
import Container from '../container';
import Footer from '../footer';
import s from './index.module.scss';


const Layout = () => {
  const match = useMatch({ path: `/` });

  return (
    <>
      <Header />
      {
        match !== null ? <Outlet /> : (
          <Container className={s.container}>
            <Outlet />
          </Container>
        )
      }
      <Footer />
    </>
  )
};

export default Layout;
