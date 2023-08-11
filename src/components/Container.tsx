import React, { useState } from 'react';
import styles from '../styles/globalStyle.module.css';
import Button from './button';
import { ModalWindow } from './modal/Modal';
import { MOCK_DATA } from '../store/mock';
import { TextField } from '@mui/material';

const Container = () => {
  const [openHandler, setOpenHandler] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleClickFC = (idx: number) => {
    setOpenHandler(!openHandler);
    setSelectedIdx(idx);
  };

  return (
    <div className={styles.wrapper}>
      {MOCK_DATA.map((el, idx) => {
        return <Button key={idx} text={el.title} handleClick={() => handleClickFC(idx)} />;
      })}
      {selectedIdx !== null && (
        <ModalWindow
          handleClick={() => setOpenHandler(false)}
          openModal={openHandler}
          describeTask={MOCK_DATA[selectedIdx].subtitle}
          step={selectedIdx}
        >
          <TextField id="outlined-basic" label="message here" variant="outlined" />
        </ModalWindow>
      )}
    </div>
  );
};

export default Container;
