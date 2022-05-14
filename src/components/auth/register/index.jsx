import React from 'react';
import pt from 'prop-types';
import { ReactComponent as Pen } from '../../../assets/icon-pen.svg';
import cn from 'classnames';


export const Register = ({ active, styles: s, form, onSetForm, onChange, onToggle, onSubmit }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.repeatPassword) {
      onSetForm(prev => ({ ...prev, errors: { repeatPassword: `Отличается от пароля` }}))
    }
    else onSubmit()
  };

  return (
    <>
      <div className={cn(s.toggle, { [s.active]: active })} onClick={onToggle}>
        <Pen />
      </div>
      <h1 className={s.title}>Register
        <div className={s.close} onClick={onToggle}></div>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className={s.inputContainer}>
          <input 
            id       = "#signup-email" 
            type     = "email"
            name     = "email"
            value    = {form.email}
            required = "required"
            onChange = {onChange}
          />
          <label htmlFor="#signup-email">Email</label>
          <div className={s.bar}>{form.errors?.email}</div>
        </div>
        <div className={s.inputContainer}>
          <input 
            id       = "#signup-password" 
            type     = "password" 
            name     = "password"
            value    = {form.password}
            required = "required"
            onChange = {onChange}
          />
          <label htmlFor="#signup-password">Password</label>
          <div className={s.bar}>{form.errors?.password}</div>
        </div>
        <div className={s.inputContainer}>
          <input 
            id       = "#signup-repeat-password" 
            type     = "password" 
            name     = "repeatPassword"
            value    = {form.repeatPassword}
            required = "required"
            onChange = {onChange}
          />
          <label htmlFor="#signup-repeat-password">Repeat Password</label>
          <div className={s.bar}>{form.errors?.repeatPassword}</div>
        </div>
        <div className={s.buttonContainer}>
          <button type='submit'><span>Register</span></button>
        </div>
      </form>
    </>
  );
};

Register.propTypes = {
  active    : pt.bool.isRequired,
  styles    : pt.shape().isRequired,
  form      : pt.shape({
    email          : pt.string,
    password       : pt.string,
    repeatPassword : pt.string
  }).isRequired,
  onSetForm : pt.func.isRequired,
  onChange  : pt.func.isRequired,
  onToggle  : pt.func.isRequired,
  onSubmit  : pt.func.isRequired
};
