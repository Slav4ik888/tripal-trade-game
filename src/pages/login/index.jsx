import React, { useState } from 'react';
import { Login } from '../../components/auth/login';
import { Register } from '../../components/auth/register';
import Logo from '../../components/btns/logo';
import cn from 'classnames';
import s from './index.module.scss';


export const LoginPage = () => {
  const [active, setActive] = useState(false);
  const [form, setForm] = useState({
    email          : ``,
    password       : ``,
    repeatPassword : ``,
    errors         : {}
  });

  const handleToggle = () => setActive(prev => !prev);
  
  const handleChange = (e) =>
    setForm(prev => ({ ...prev, errors: {}, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    console.log('Form: ', form);

    if (form.password !== form.repeatPassword) {
      console.log(`Form is invalid nah!`);
      setForm(prev => ({ ...prev, errors: { repeatPassword: `Отличается от пароля` }}))
    }
    else console.log(`Form is valid!`);
  };


  return (
    <>
      <Logo styles={{ wrap: s.headerLogo }} />

      <div className={cn(s.container, { [s.active]: active })}>
        <div className={s.card} />
        
        <div className={s.card}>
          <Login
            styles   = {s}
            form     = {form}
            onChange = {handleChange}
            onSubmit = {handleSubmit}
          />
        </div>

        <div className={cn(s.card, s.alt)}>
          <Register
            styles    = {s}
            active    = {active}
            form      = {form}
            onSetForm = {setForm}
            onToggle  = {handleToggle}
            onChange  = {handleChange}
            onSubmit  = {handleSubmit}
          />
        </div>
      </div>
    </>
  );
};
