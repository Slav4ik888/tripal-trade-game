import React from 'react';
import { Input } from '../../input';
import pt from 'prop-types';
import Button from '../../btns/button';
import { Form } from '../form';
import { btnType } from '../../../utils/types';



export const Login = ({ styles: s, form, onChange, onSubmit }) => {
  
  const inputStyle = {
    root  : s.inputContainer,
    valid : s.valid,
    error : s.bar
  };

  return (
    <>
      <h1 className={s.title}>Login</h1>
      <Form onSubmit={onSubmit}>
        <Input
          id       = "email"
          type     = "email"
          name     = "email"
          label    = "Email"
          value    = {form.email}
          error    = {form.errors?.email}
          styles   = {inputStyle}
          onChange = {onChange}
        />
        <Input
          id       = "password"
          type     = "password"
          name     = "password"
          label    = "Password"
          value    = {form.password}
          error    = {form.errors?.password}
          styles   = {inputStyle}
          onChange = {onChange}
        />
        
        <Button
          typeBtn = {btnType.red}
          type    = 'submit'
          styles  = {{ root: s.buttonContainer }}
        >
          Go
        </Button>
      </Form>
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
