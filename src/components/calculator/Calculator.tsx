import React, { useState } from 'react';
import styles from '../../styles/globalStyle.module.css';

const Calculator = () => {
  const [num, setNum] = useState<string>('0');
  const [oldNum, setOldNum] = useState<string>('0');
  const [operator, setOperator] = useState<string>('');

  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const sumbols = ['/', 'X', '-', '+'];

  function inputNum(e: React.MouseEvent<HTMLButtonElement>) {
    const input = e.currentTarget.value;
    setNum((prevNum) => (prevNum === '0' ? input : prevNum + input));
  }

  function clear() {
    setNum('0');
    setOldNum('0');
    setOperator('');
  }

  function operatorHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const operatorInput = e.currentTarget.value;
    if (operatorInput === '-' && num === '0') {
      setNum('-');
    } else {
      setOperator(operatorInput);
      setOldNum(num);
      setNum('0');
    }
  }

  function calculate() {
    const oldNumValue = parseFloat(oldNum);
    const numValue = parseFloat(num);

    if (operator === '/') {
      setNum(String(oldNumValue / numValue));
    } else if (operator === 'X') {
      setNum(String(oldNumValue * numValue));
    } else if (operator === '-') {
      setNum(String(oldNumValue - numValue));
    } else if (operator === '+') {
      setNum(String(oldNumValue + numValue));
    }

    setOperator('');
    setOldNum(num);
  }

  function porcentagem() {
    const oldNumValue = parseFloat(oldNum);
    const numValue = parseFloat(num);
    const percentageValue = (numValue / 100) * oldNumValue;
    setNum(String(percentageValue));
    setOperator('');
    setOldNum(String(percentageValue));
  }

  return (
    <div className={styles.wrapperCalc}>
      <h2 className={styles.resultCalk}>{num}</h2>
      <button onClick={clear}>AC</button>
      <button onClick={operatorHandler} value={'-'}>
        -
      </button>
      <button onClick={operatorHandler} value={'+'}>
        +
      </button>
      <button onClick={porcentagem}>%</button>
      {numbers.map((number) => (
        <button key={number} onClick={inputNum} value={number}>
          {number}
        </button>
      ))}
      {sumbols.map((num, idx) => (
        <button key={idx} onClick={operatorHandler} value={num}>
          {num}
        </button>
      ))}
      <button onClick={inputNum} value={'.'}>
        ,
      </button>
      <button onClick={calculate}>=</button>
    </div>
  );
};

export default Calculator;
