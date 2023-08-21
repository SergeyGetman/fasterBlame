import React from 'react';
import styles from '../styles/globalStyle.module.css';
import Button from './button';
import { useNavigate } from 'react-router-dom';

const Container = () => {
  const navigate = useNavigate();

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
