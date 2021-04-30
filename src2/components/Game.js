import React from "react";
import Board from "./Board";

function Game() {
  return <Board />;
}

function calculateWinner(squares) {
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < arr.length; i++) {
    const [a, b, c] = arr[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { status: squares[a], winnerArray: arr[i] };
    }
  }
  return null;
}

function MyTable(props) {
  return (
    <table className="myTable">
      <tr>
        <th>Move No.</th>
        <th>Player</th>
        <th>Cell index.</th>
      </tr>
      {props.data.map(row => {
        return (
          <tr>
            <td>{row.serialNum} </td>
            <td>{row.next}</td>
            <td>{row.position}</td>
          </tr>
        );
      })}
    </table>
  );
}

let values = { Game, calculateWinner, MyTable };
export default values;
