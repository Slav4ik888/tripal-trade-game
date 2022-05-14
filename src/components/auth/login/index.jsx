import React, { useState } from 'react';
import pt from 'prop-types';


export const Login = ({ styles: s, form, onChange, onSubmit }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <h1 className={s.title}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={s.inputContainer}>
          <input
            id       = "#email"
            type     = "email"
            name     = "email"
            value    = {form.email}
            required = "required"
            onChange = {onChange}
          />
          <label htmlFor="#email">Email</label>
          <div className={s.bar}>{form.errors?.email}</div>
        </div>
        <div className={s.inputContainer}>
          <input
            id       = "#password"
            type     = "password"
            name     = "password"
            value    = {form.password}
            required = "required"
            onChange = {onChange}
          />
          <label htmlFor="#password">Password</label>
          <div className={s.bar}>{form.errors.password}</div>
        </div>
        <div className={s.buttonContainer}>
          <button type='submit'><span>Go</span></button>
        </div>
      </form>
    </>
  );
};

Login.propTypes = {
  styles   : pt.shape().isRequired,
  form     : pt.shape({
    email          : pt.string,
    password       : pt.string,
    repeatPassword : pt.string
  }).isRequired,
  onChange : pt.func.isRequired,
  onSubmit : pt.func.isRequired
};
