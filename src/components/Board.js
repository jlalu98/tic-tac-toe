import React from "react";
import Cell from "./Cells";
// import MyTable from "./table-component";
// import Game from "./Game";

class Board extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   tableData: [],
    //   next: "X",
    //   cells: [null, null, null, null, null, null, null, null, null],
    // };
  }
  // handleCellClick = id => {
  //   let currentValue = this.state.cells[id];
  //   if (this.props.getwinner(this.state.cells) || currentValue) return;
  //   let movesData = this.state.tableData;
  //   movesData.push({
  //     next: this.state.next,
  //     position: id,
  //     serialNum: this.state.cells.filter(cell => cell != null).length + 1,
  //     player1: this.props.player1,
  //     player2: this.props.player2,
  //   });

  //   let newCells = [...this.state.cells];
  //   newCells[id] = this.state.next;

  //   let newNext = this.state.next === "O" ? "X" : "O";

  //   this.setState({ cells: newCells, next: newNext, tableData: movesData });
  // };

  // restart = () => {
  //   this.setState({
  //     tableData: [],
  //     next: "X",
  //     cells: [null, null, null, null, null, null, null, null, null],
  //   });
  // };

  render() {
    // let status;
    // let win;
    // if (
    //   this.state.cells.filter(cell => cell !== null).length ===
    //     this.state.cells.length &&
    //   !this.props.getwinner(this.state.cells)
    // ) {
    //   status = "stale Mate";
    // } else {
    //   win = this.props.getwinner(this.state.cells);
    //   if (win) {
    //     let winner =
    //       win.status === "X" ? this.props.player1 : this.props.player2;
    //     status = "Winner is : " + winner;
    //   } else {
    //     let move =
    //       this.state.next === "X" ? this.props.player1 : this.props.player2;
    //     status = "Next Move By : " + move;
    //   }
    // }

    return (
      <div>
        {/* <h4>{status}</h4>
        <button className="restart " onClick={this.restart}>
          Re-Play
        </button> */}
        <div className="board">
          {this.props.cells.map((value, index) => (
            <Cell
              id={index}
              value={value}
              onCellClick={this.props.handle}
              onWinner={this.props.win ? this.props.win.winnerArray : null}
            />
          ))}
        </div>
        {/* <div>
          <MyTable data={this.state.tableData} />
        </div> */}
      </div>
    );
  }
}

export default Board;
