import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sum, setSum] = useState(0);

  const handleFirstNumber = (event) => {
    setFirstNumber(event.target.value);
  };
  const handleSecondNumber = (event) => {
    setSecondNumber(event.target.value);
  };

  useEffect(() => {
    let a = parseInt(firstNumber);
    let b = parseInt(secondNumber);
    setSum(a + b);
  }, [firstNumber, secondNumber]);

  const resetNumbers = () => {
    setFirstNumber(0);
    setSecondNumber(0);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex-col justify-between text-center">
        <div className="mb-20">
          <h1> Basic Form Calculator</h1>
        </div>

        <h6>The Sum is : {sum > 0 ? sum : 0}</h6>
        <form className="space-x-4 pt-6">
          <input
            className=" px-2 py-2 border-2 border-gray-900 rounded-xl"
            type="number"
            onChange={handleFirstNumber}
            value={firstNumber}
            placeholder="enter a first number"
          />
          <input
            className=" px-2 py-2 border-2 border-gray-900 rounded-xl"
            type="number"
            onChange={handleSecondNumber}
            value={secondNumber}
            placeholder="enter a second number"
          />

          <button
            onClick={resetNumbers}
            className="px-4 py-3 bg-gray-400 rounded-lg"
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
