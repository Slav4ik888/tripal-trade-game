import React from 'react';
import pt from 'prop-types';
import cn from 'classnames';


export const Input = ({ id, type, name, value, required, label, error, styles: s, onChange  }) => {

  return (
    <div className={s.root}>
      <input
        id        = {id}
        type      = {type}
        name      = {name}
        value     = {value}
        required  = {required}
        onChange  = {onChange}
      />
      <label htmlFor={id} className={cn({ [s.valid]: value.length > 0 })}>{label}</label>
      <div className={s.error}>{error}</div>
    </div>
  );
};


Input.defaultProps = {
  type     : "text",
  required : true
};


Input.propTypes = {
  id       : pt.string,
  type     : pt.oneOf(["text", "number", "email", "password"]),
  name     : pt.string,
  value    : pt.oneOfType([pt.string, pt.number]),
  required : pt.bool,
  label    : pt.string,
  error    : pt.string,
  styles: pt.shape({
    root  : pt.string,
    error : pt.string
  }),
  onChange : pt.func
};
