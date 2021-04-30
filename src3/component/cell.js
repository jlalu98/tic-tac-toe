import React, { Component } from 'react';


function CellBoard(props) {
  let style = {
    color: props.value ? "black" : "transparent",
  };
  let value = props.value || "_";
  if (props.onWinner) {
    console.log(props.onWinner);
    for (const index of props.onWinner) {
      if (index === props.id) {
        style = {
          backgroundColor: "yellow",
        };
      }
    }
  }

  return (
    <button onClick={() => props.onCellClick(props.id)}
      style={style} id="celldesign">{value}
    </button>
  );
}

export default CellBoard;


 