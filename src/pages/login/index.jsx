import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Login } from '../../components/auth/login';
import { Register } from '../../components/auth/register';
import Logo from '../../components/btns/logo';
import cn from 'classnames';
import s from './index.module.scss';
import { useAuth } from '../../components/auth/context';
import { Path } from '../../utils/types';
import { useMemo } from 'react';

const initState = {
  email          : ``,
  password       : ``,
  repeatPassword : ``,
  errors         : {}
};


export const LoginPage = () => {
  const
    auth                  = useAuth(),
    [loading, setLoading] = useState(false),
    [active, setActive]   = useState(false),
    [form, setForm]       = useState(() => ({ ...initState })),
    navigate              = useNavigate(),
    location              = useLocation(),
    pathState             = useMemo(() => location.state?.from, [location.state]);
  
  
  useEffect(() => { auth.user !== null && navigate(pathState); }, []);
  
  const handlerToggle = () => setActive(prev => !prev);
  const handlerChange = (obj) => setForm(prev => ({ ...prev, errors: {}, ...obj }));

  const handlerSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      if (active) auth.register(form);
      else auth.login(form, () => pathState ? navigate(pathState) : navigate(Path.MAIN));

      setLoading(false);
      setForm({ ...initState });
    }, 2000);
  };


  return (
    <>
      <Logo styles={{ wrap: s.headerLogo }} />

      <div className={cn(s.container, { [s.active]: active })}>
        <div className={s.card} />
        
        <div className={s.card}>
          <Login
            loading  = {loading}
            styles   = {s}
            form     = {form}
            onChange = {handlerChange}
            onSubmit = {handlerSubmit}
          />
        </div>

        <div className={cn(s.card, s.alt)}>
          <Register
            loading  = {loading}
            styles    = {s}
            active    = {active}
            form      = {form}
            onSetForm = {setForm}
            onToggle  = {handlerToggle}
            onChange  = {handlerChange}
            onSubmit  = {handlerSubmit}
          />
        </div>
      </div>
    </>
  );
};
