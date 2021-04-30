import React from 'react';
import './index.css';

function Square(props) {
    return (
      <button className={props.styleSquare} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

export default Square;