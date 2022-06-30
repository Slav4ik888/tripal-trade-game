import React, { useRef, useState } from 'react';
import pt from 'prop-types';
import cn from 'classnames';


export const Input = ({ id, type, name, defaultValue, required, label, error, styles: s, onChange  }) => {
  const
    ref = useRef(null),
    [value, setValue] = useState(defaultValue || ``);
  
  
  const handleChange = (e) => {
    const v = ref.current.value;
    setValue(v);
    onChange && onChange({ [name]: v });
  };


  return (
    <div className={s.root}>
      <input
        id        = {id}
        type      = {type}
        name      = {name}
        ref       = {ref}
        required  = {required}
        onChange  = {handleChange}
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
