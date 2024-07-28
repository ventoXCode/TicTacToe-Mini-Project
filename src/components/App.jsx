import { useState } from "react";

function App() {
  const [player, setPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (id) => {
    if (gameOver) return;
    const currBox = document.getElementById(id);
    if (currBox.innerText == "") {
      currBox.innerText = player;
    } else {
      return;
    }
    setPlayer(player === "X" ? "O" : "X");
    declareWinner();
  };

  const declareWinner = () => {
    const boxes = document.querySelectorAll(".row > div");
    const winnerText = document.querySelector(".winner");
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (
        boxes[a].innerText &&
        boxes[a].innerText === boxes[b].innerText &&
        boxes[a].innerText === boxes[c].innerText
      ) {
        winnerText.innerText = `${boxes[a].innerText} wins!`;
        setGameOver(true);
        return;
      }
    }

    // Check if all boxes are filled
    const allFilled = Array.from(boxes).every((box) => box.innerText !== "");
    if (allFilled) {
      winnerText.innerText = "It's a draw!";
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-7xl">
        <h1 className="text-6xl text-center mb-5">Tic Tac Toe</h1>
        <p className="text-center mb-5 guide">{player}'s move</p>
        <div className="row flex justify-center items-center">
          <div
            className="w-24 h-24 flex justify-center items-center border-2 border-black bg-gray-200"
            id="0"
            onClick={() => handleClick(0)}
          ></div>
          <div
            className="w-24 h-24 flex justify-center items-center border-2 border-black bg-gray-200"
            id="1"
            onClick={() => handleClick(1)}
          ></div>
          <div
            className="w-24 h-24 flex justify-center items-center border-2 border-black bg-gray-200"
            id="2"
            onClick={() => handleClick(2)}
          ></div>
        </div>
        <div className="row flex justify-center items-center">
          <div
            className="w-24 h-24 flex justify-center items-center border-2 border-black bg-gray-200"
            id="3"
            onClick={() => handleClick(3)}
          ></div>
          <div
            className="w-24 h-24 flex justify-center items-center border-2 border-black bg-gray-200"
            id="4"
            onClick={() => handleClick(4)}
          ></div>
          <div
            className="w-24 h-24 flex justify-center items-center border-2 border-black bg-gray-200"
            id="5"
            onClick={() => handleClick(5)}
          ></div>
        </div>
        <div className="row flex justify-center items-center">
          <div
            className="w-24 h-24 flex justify-center items-center border-2 border-black bg-gray-200"
            id="6"
            onClick={() => handleClick(6)}
          ></div>
          <div
            className="w-24 h-24 flex justify-center items-center border-2 border-black bg-gray-200"
            id="7"
            onClick={() => handleClick(7)}
          ></div>
          <div
            className="w-24 h-24 flex justify-center items-center border-2 border-black bg-gray-200"
            id="8"
            onClick={() => handleClick(8)}
          ></div>
        </div>
        <div className="winner text-center mt-5 text-green-400 text-9xl"></div>
      </div>
    </div>
  );
}

export default App;
