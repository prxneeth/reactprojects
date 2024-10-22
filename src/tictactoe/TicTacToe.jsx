import React, { useEffect, useState } from "react";

const TicTacToe = () => {
  const [array, setArray] = useState([...Array(9).fill("")]);
  const [xTurn, setXturn] = useState(true);
  const [status, setStatus] = useState("");

  function handleBoxClick(idx) {
    const newArray = [...array];

    if (!newArray[idx] && !checkWinner(array)) {
      newArray[idx] = xTurn ? "X" : "O";
      setXturn(!xTurn);
      setArray(newArray);
    }
  }

  function checkWinner(array) {
    const winPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winPattern.length; i++) {
      const [a, b, c] = winPattern[i];
      if (array[a] && array[a] === array[b] && array[a] === array[c]) {
        return array[a];
      }
    }
    return null;
  }

  useEffect(() => {
    const winner = checkWinner(array);
    if (winner) {
      setStatus(`Winner is ${winner}`);
    } else if (array.every((item) => item)) {
      setStatus("DRAW");
    } else {
      setStatus(`Next player is ${xTurn ? "X" : "O"}`);
    }
  }, [array, xTurn]);

  function handleRestart() {
    setXturn(true);
    setArray(Array(9).fill(""));
    setStatus("");
  }

  return (
    <div className="mt-10">
      <div className="flex justify-center ">
        <div className="grid grid-cols-3 w-72 h-72 ">
          {array.map((value, i) => (
            <span
              key={i}
              className="flex items-center justify-center h-24 bg-purple-200"
              style={{
                border: "1px solid blue",
                fontSize: "2rem",

                cursor: "pointer",
                color:
                  value === "X" ? "black" : value === "O" ? "red" : "black",
              }}
              onClick={() => handleBoxClick(i)}
            >
              {value}
            </span>
          ))}
        </div>
      </div>{" "}
      <div className="text-center">
        {" "}
        <h1>{status}</h1>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default TicTacToe;
