import React from 'react';

export const DefaultMatrix = () => {
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

  const inputMatrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ];

  const rotatedResult = rotateMatrix(inputMatrix);

  for (let i = 0; i < rotatedResult.length; i++) {
    console.log(rotatedResult[i].join(' '));
  }
  rotateMatrix(inputMatrix);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>MATRIX</h1>
    </div>
  );
};

export default DefaultMatrix;
