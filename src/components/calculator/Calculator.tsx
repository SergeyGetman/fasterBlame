import React, { FC, useState } from 'react';
import styles from '../../styles/globalStyle.module.css';

const Calculator = () => {
  const [num, setNum] = useState<string>('0'); // Используйте строку для хранения числа
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

  function porcentagem() {
    setNum((prevNum) => String(parseFloat(prevNum) / 100));
  }

  function changeSign() {
    setNum((prevNum) => String(-parseFloat(prevNum)));
  }
  function changePlus() {
    setNum((prevNum) => String(+parseFloat(prevNum)));
  }

  function operatorHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const operatorInput = e.currentTarget.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum('0');
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
    setOldNum('0');
  }

  return (
    <div className={styles.wrapperCalc}>
      <h2 className={styles.resultCalk}>{num}</h2>
      <button onClick={clear}>AC</button>
      <button onClick={changeSign}>-</button>
      <button onClick={changePlus}>+</button>
      <button onClick={porcentagem}>%</button>
      {numbers.map((number) => (
        <button key={number} className="grey" onClick={inputNum} value={number}>
          {number}
        </button>
      ))}

      <button className="orange" onClick={operatorHandler} value={'/'}>
        /
      </button>
      <button className="orange" onClick={operatorHandler} value={'X'}>
        X
      </button>
      <button className="orange" onClick={operatorHandler} value={'-'}>
        -
      </button>
      <button className="orange" onClick={operatorHandler} value={'+'}>
        +
      </button>
      <button className="grey" onClick={inputNum} value={'.'}>
        ,
      </button>
      <button className="orange" onClick={calculate}>
        =
      </button>
    </div>
  );
};

export default Calculator;
