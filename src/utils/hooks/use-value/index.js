import * as React from 'react';

/**
 * 
 */
export function useValue(initValue, initOpen, initIsChange)  {
  const
    [value, _setValue] = React.useState(initValue !== undefined ? initValue : null),
    setValue = (value, open) => {
      _setValue(prev => value);
      if (typeof open !== `undefined`) _setOpen(open);
    },
    clearValue = () => _setValue((typeof initValue === `string` ? `` : 0)),

    [open, _setOpen] = React.useState(initOpen || false),
    setOpen = (c) => {
      _setOpen(true);
      if (typeof c !== `undefined`) setChanges(c);
    },
    setClose = (c) => {
      _setOpen(false);
      if (typeof c !== `undefined`) setChanges(c);
    },

    [changes, _setChange] = React.useState(initIsChange),
    setChanges = (v) => _setChange(v),

    [confirm, _setConfirm] = React.useState(false),
    setConfirm = (v) => _setConfirm(v);

  
  return {
    value,   setValue,    clearValue,
    open,    setOpen,     setClose,
    changes, setChanges,
    confirm, setConfirm
  }
};
