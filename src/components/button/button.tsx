import React, { FC } from 'react';
import { IButtonsInterface } from '../../types/types';

const Button: FC<IButtonsInterface> = ({ text, handleClick }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

export default Button;
