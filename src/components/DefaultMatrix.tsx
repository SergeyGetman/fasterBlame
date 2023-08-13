import React from 'react';
import { Matrix } from '../types/types';

export const DefaultMatrix = () => {
  const inputMatrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ];

  function rotateMatrix(matrix: any[]) {
    const n = matrix.length;
    const rotatedMatrix = new Array(n).fill(0).map(() => new Array(n));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotatedMatrix[j][n - i - 1] = matrix[i][j];
      }
    }
    return rotatedMatrix;
  }

  const rotatedResult = rotateMatrix(inputMatrix);

  for (let i = 0; i < rotatedResult.length; i++) {
    console.log(rotatedResult[i].join(' '));
  }
  rotateMatrix(inputMatrix);

  function showIntoPage(mx: Matrix): string {
    let newArr = rotateMatrix(mx);
    let str = '';

    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr[i].length; j++) {
        str += newArr[i][j] + ' ';
      }
      str += '\n';
    }

    return str;
  }

  function showPreviousMatrix(matr: Matrix) {
    let str = '';
    for (let i = 0; i < matr.length; i++) {
      str += matr[i] + '\n';
      str.replace(',', ' ');
    }
    return str;
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', position: 'absolute' }}>Previous Matrix </h1>
      <pre>{showPreviousMatrix(inputMatrix)} </pre>
      <h1>Matrix after rotate</h1>

      <pre>{showIntoPage(inputMatrix)}</pre>
    </>
  );
};

export default DefaultMatrix;
