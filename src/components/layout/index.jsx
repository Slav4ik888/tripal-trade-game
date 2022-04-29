import React from 'react';
import { Outlet } from 'react-router-dom';
import cn from 'classnames';
import Header from '../header';
import Footer from '../footer';
import s from './index.module.scss';


const Layout = () => {

  return (
    <div className={cn(s.root)}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

export default Layout;
