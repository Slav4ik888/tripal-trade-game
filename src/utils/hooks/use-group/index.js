import * as React from 'react';
import { cloneObj } from '../../../utils/clone-obj';
  
  

export function useGroup(initOpen, initGroup, initIsChange) {
  const
    [group, _setGroup] = React.useState(cloneObj(initGroup || {})),
    setGroup = (group, noChanges) => {
      _setGroup((prev) => cloneObj(group));
      if (!noChanges) _setChanges(true);
    },
    updateGroup = (group, noChanges) => {
      _setGroup((prev) => cloneObj(group));
      if (!noChanges) _setChanges(true);
    },

    getGroup = () => {
      return new Promise((resolve, reject) => {
        let obj = {};

        _setGroup(prev => {
          obj = cloneObj(prev);
          resolve(obj);
          return prev
        });
      })
    };

  const
    [open, _setOpen] = React.useState(initOpen || false),
    setOpen = () => _setOpen(true),
    setClose = () => {
      _setGroup({}); // Очищаем старое состояние
      _setOpen(false);
      _setChanges(false);
    },

    [changes, _setChanges] = React.useState(initIsChange || false),
    setChanges = (v) => _setChanges((prev) => v),

    [confirm, _setConfirm] = React.useState(false),
    setConfirm  = (v) => _setConfirm((prev) => v);


  return {
    open,     setOpen, setClose,
    group,    setGroup, updateGroup, getGroup,
    changes,  setChanges,
    confirm,  setConfirm
  }
};
