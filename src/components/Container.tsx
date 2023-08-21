import React, { useState } from 'react';
import styles from '../styles/globalStyle.module.css';
import Button from './button';
import { useNavigate } from 'react-router-dom';

const Container = () => {
  const [openHandler, setOpenHandler] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const navigate = useNavigate();

  const handleClickFC = (idx: number) => {
    setOpenHandler(!openHandler);
    setSelectedIdx(idx);
  };

  const handleClickNavigate = () => {
    navigate('/coursea');
  };

  return (
    <div className={styles.wrapper}>
      <Button text="Open program of course" handleClick={handleClickNavigate} />
    </div>
  );
};

export default Container;
