import React from "react";
import Cell from "./Cells";
import values from "./Game";

let tableData = [];
class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      next: "X",
      cells: [null, null, null, null, null, null, null, null, null],
    };
  }
  handleCellClick = id => {
    let currentValue = this.state.cells[id];
    if (values.calculateWinner(this.state.cells) || currentValue) return;

    tableData.push({
      next: this.state.next,
      position: id,
      serialNum: this.state.cells.filter(cell => cell != null).length + 1,
    });

    if (currentValue) return;

    let newCells = [...this.state.cells];
    newCells[id] = this.state.next;

    let newNext = this.state.next === "O" ? "X" : "O";

    this.setState({ cells: newCells, next: newNext });
  };

  restart = () => {
    tableData = [];
    this.setState({
      next: "X",
      cells: [null, null, null, null, null, null, null, null, null],
    });
  };

  render() {
    let status;
    let win;
    if (
      this.state.cells.filter(cell => cell !== null).length ===
        this.state.cells.length &&
      !values.calculateWinner(this.state.cells)
    ) {
      status = "stale Mate";
    } else {
      win = values.calculateWinner(this.state.cells);
      if (win) {
        console.log(win.array);
        status = "Winner is : " + win.status;
      } else {
        status = "Next Move By : " + this.state.next;
      }
    }

    return (
      <div>
        <h4>{status}</h4>
        <button className="restart " onClick={this.restart}>
          Restart The Game
        </button>
        <div className="board">
          {this.state.cells.map((value, index) => (
            <Cell
              id={index}
              value={value}
              onCellClick={this.handleCellClick}
              onWinner={win ? win.winnerArray : null}
            />
          ))}
        </div>
        <div>
          <values.MyTable data={tableData} />
        </div>
      </div>
    );
  }
}

export default Board;
