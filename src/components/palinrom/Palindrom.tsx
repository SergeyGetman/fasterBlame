import React, { useState } from 'react';
import { Alert, TextField } from '@mui/material';
import { NotificationEnum } from '../../types/enams/enam';

const Palindrom = () => {
  const [checkPalindrom, setCheckPalindrom] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value) {
      setCheckPalindrom(value === value.split('').reverse().join(''));
    }
  };
  return (
    <>
      <TextField id="outlined-basic" label="message here" variant="outlined" onChange={handleInputChange} />
      {checkPalindrom ? (
        <Alert severity="success">{NotificationEnum.susses}</Alert>
      ) : (
        <Alert severity="error">{NotificationEnum.error}</Alert>
      )}
    </>
  );
};

export default Palindrom;
