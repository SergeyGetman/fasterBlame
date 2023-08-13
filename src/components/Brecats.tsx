import React, { FC, useState } from 'react';
import { Alert, TextField } from '@mui/material';
import { IBrecets } from '../types/types';
import { NotificationEnum } from '../types/enams/enam';

const Brecats: FC<IBrecets> = (str) => {
  const [checkBrekets, setCheckBrekets] = useState<boolean>(false);

  const mapping: any = {
    '}': '{',
    '>': '<',
    ')': '(',
    ']': '[',
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    function check(value: string) {
      let stacks: any = {
        '[': [],
        '{': [],
        '<': [],
        '(': [],
      };
      // eslint-disable no-console, no-control-regex
      let str = value.replace(/[^\<\>\{\}\[\]\(\)]/g, '');

      for (let a of str) {
        switch (a) {
          case '[':
          case '(':
          case '<':
          case '{':
            stacks[a].push(a);
            break;
          case ']':
          case ')':
          case '>':
          case '}':
            const b = mapping[a];
            if (stacks[b].length) stacks[b].pop();
            else return false;
            break;
        }
      }

      console.log(!Object.values(stacks).find((s: any) => s.length));
      return !Object.values(stacks).find((s: any) => s.length);
    }
    setCheckBrekets(check(value));
  };

  return (
    <>
      <TextField id="outlined-basic" label="message here" variant="outlined" onChange={handleInputChange} />
      {checkBrekets ? (
        <Alert severity="success">{NotificationEnum.breketsNotificationSusses}</Alert>
      ) : (
        <Alert severity="error">{NotificationEnum.breketsNotificationError}</Alert>
      )}
    </>
  );
};

export default Brecats;
