import React from 'react';
import pt from 'prop-types';



export const Form = ({ styles: s, children, onSubmit }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} style={s}>
      {children}
    </form>
  );
};

Form.propTypes = {
  styles   : pt.shape(),
  children : pt.node.isRequired,
  onSubmit : pt.func.isRequired
};
