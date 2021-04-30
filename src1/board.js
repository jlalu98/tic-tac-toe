import React from 'react';
import './index.css';
import Square from "./square";

class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          styleSquare = {this.props.styleSquare[i]}
        />
      );
    }
  // Two loops to create the board! Took so long to do this so don't forget it!!!
    render() {
      
      const index = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
      const rows = index.map((i) => {
            
           var cells = i.map((j) => {
            return ( <label key={j.toString()}>{this.renderSquare(j)}</label>);
           });
          return( 
             <div key={i.toString()} className="board-row"> 
                 {cells}
            </div>
                );
      });
      
      return (
        <div>
          {rows}
        </div>
      );
    }
  }

  export default Board;