import React from 'react';
import pt from 'prop-types';
import { ReactComponent as Pen } from '../../../assets/icon-pen.svg';
import cn from 'classnames';
import { Input } from '../../input';
import Button from '../../btns/button';
import { Form } from '../form';
import { btnType } from '../../../utils/types';



export const Register = ({ active, styles: s, form, onChange, onToggle, onSubmit }) => {

  const inputStyle = {
    root  : s.inputContainer,
    valid : s.valid,
    error : s.bar
  };

  return (
    <>
      <div className={cn(s.toggle, { [s.active]: active })} onClick={onToggle}>
        <Pen />
      </div>
      <h1 className={s.title}>Register
        <div className={s.close} onClick={onToggle} />
      </h1>
      <Form onSubmit={onSubmit}>
        <Input
          id       = "signup-email"
          type     = "email"
          name     = "email"
          label    = "Email"
          value    = {form.email}
          error    = {form.errors?.email}
          styles   = {inputStyle}
          onChange = {onChange}
        />
        <Input
          id       = "signup-password"
          type     = "password"
          name     = "password"
          label    = "Password"
          value    = {form.password}
          error    = {form.errors?.password}
          styles   = {inputStyle}
          onChange = {onChange}
        />
        <Input
          id       = "signup-repeat-password"
          type     = "password"
          name     = "repeatPassword"
          label    = "Repeat Password"
          value    = {form.repeatPassword}
          error    = {form.errors?.repeatPassword}
          styles   = {inputStyle}
          onChange = {onChange}
        />
        
        <Button
          typeBtn = {btnType.redToggle}
          type    = 'submit'
          styles  = {{ root: s.buttonContainer }}
        >
          Register
        </Button>
      </Form>
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
