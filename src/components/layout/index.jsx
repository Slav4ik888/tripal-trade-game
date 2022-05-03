import React, { useEffect, useState } from 'react';
import { Outlet, useMatch, useLocation } from 'react-router-dom';
import Header from '../header';
import Container from '../container';
import Footer from '../footer';
import s from './index.module.scss';


const Layout = () => {
  const
    match = useMatch({ path: `/` }),
    location = useLocation(),
    [path, setPath] = useState(location.pathname);
  
  useEffect(() => {
    if (path !== location.pathname) {
      setPath(location.pathname)
      let anchorId = document.getElementById(`root`);
  
      if (anchorId) {
        anchorId.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // start, center, end или nearest.
        });
      }
    }
  }, [location.pathname]);

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
