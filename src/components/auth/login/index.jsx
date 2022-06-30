import React, { useRef } from 'react';
import { Input } from '../../input';
import pt from 'prop-types';
import Button from '../../btns/button';
import { Form } from '../form';
import { btnType } from '../../../utils/types';



export const Login = ({ loading, styles: s, form, onChange, onSubmit }) => {

  const handleSubmit = (e) => {
    onSubmit && onSubmit();
  };
  
  const inputStyle = {
    root  : s.inputContainer,
    valid : s.valid,
    error : s.bar
  };

  return (
    <>
      <h1 className={s.title}>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          id           = "email"
          type         = "email"
          name         = "email"
          label        = "Email"
          defaultValue = {form.email}
          error        = {form.errors?.email}
          styles       = {inputStyle}
          onChange     = {onChange}
        />
        <Input
          id           = "password"
          type         = "password"
          name         = "password"
          label        = "Password"
          defaultValue = {form.password}
          error        = {form.errors?.password}
          styles       = {inputStyle}
          onChange     = {onChange}
        />
        
        <Button
          typeBtn  = {btnType.red}
          type     = 'submit'
          disabled = {loading}
          styles   = {{ root: s.buttonContainer }}
        >
          Go
        </Button>
      </Form>
    </>
  );
};

Login.propTypes = {
  loading  : pt.bool.isRequired,
  styles   : pt.shape().isRequired,
  form     : pt.shape({
    email          : pt.string,
    password       : pt.string,
    repeatPassword : pt.string
  }).isRequired,
  onChange : pt.func.isRequired,
  onSubmit : pt.func.isRequired
};
