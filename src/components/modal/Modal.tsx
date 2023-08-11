import React, { FC } from 'react';
import { Modal } from '@mui/material';
import { TitleBlockInfo, TitleBlockInfoDescribe } from './StyledComponent.style';
import { IModalTypes } from '../../types/types';
import { StepperEnum } from '../../types/enams/enam';
import Calculator from '../calculator/Calculator';
import Brecats from '../Brecats';
import Palindrom from '../palinrom/Palindrom';
import DefaultMatrix from '../DefaultMatrix';

export const ModalWindow: FC<IModalTypes> = ({ openModal, handleClick, describeTask, step }) => {
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TitleBlockInfo width="700px">
          <TitleBlockInfoDescribe>{describeTask}</TitleBlockInfoDescribe>

          <>
            {step === StepperEnum.step_one ? (
              <Palindrom />
            ) : step === StepperEnum.step_two ? (
              <Calculator />
            ) : step === StepperEnum.step_three ? (
              <Brecats />
            ) : (
              <DefaultMatrix />
            )}
          </>
        </TitleBlockInfo>
      </Modal>
    </>
  );
};

export default Modal;
