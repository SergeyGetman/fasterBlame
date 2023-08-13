import { ReactNode, ReactPropTypes } from 'react';

export interface GeneralInterface {
  props?: ReactPropTypes;
  children?: ReactNode;
}
export interface IButtonsInterface {
  text: string;
  handleClick: () => void;
}

export interface IModalTypes {
  openModal: boolean;
  handleClick: () => void;
  describeTask?: string;
  step: number;
  children: ReactNode;
}
export interface IBrecets {
  text?: string;
}
export type Matrix = number[][];
