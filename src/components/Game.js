import React from "react";
import Board from "./Board";
import InputComponent from "./input-component";
import MyTable from "./table-component";
import Counter from "./timer-component";

let id1;
let id2;
let value1 = 0;
let value2 = 0;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      next: "X",
      cells: [null, null, null, null, null, null, null, null, null],
      player1: "",
      player2: "",
      isGame: false,
    };
  }

  calculateWinner(squares) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { status: squares[a], winnerArray: arr[i] };
      }
    }
    return null;
  }

  handleCellClick = id => {
    let currentValue = this.state.cells[id];
    if (this.calculateWinner(this.state.cells) || currentValue) return;
    let movesData = this.state.tableData;
    movesData.push({
      next: this.state.next,
      position: id,
      serialNum: this.state.cells.filter(cell => cell != null).length + 1,
      player1: this.state.player1,
      player2: this.state.player2,
    });

    let newCells = [...this.state.cells];
    newCells[id] = this.state.next;

    let newNext = this.state.next === "O" ? "X" : "O";

    if (this.state.next === "X") {
      this.startTimer1();
      this.stopTimer2();
    }
    if (this.state.next === "O") {
      this.startTimer2();
      this.stopTimer1();
    }

    this.setState({ cells: newCells, next: newNext, tableData: movesData });
  };

  startTimer1 = () => {
    id1 = setInterval(() => {
      value1++;
      let timer = document.getElementById("timer1");
      timer.innerHTML = value1;
    }, 1000);
  };

  stopTimer1 = () => {
    clearInterval(id1);
  };

  startTimer2 = () => {
    id2 = setInterval(() => {
      value2++;
      let timer = document.getElementById("timer2");
      timer.innerHTML = value2;
    }, 1000);
  };

  stopTimer2 = () => {
    clearInterval(id2);
  };

  restart = () => {
    this.stopTimer1();
    this.stopTimer2();
    this.setState({
      tableData: [],
      next: "X",
      cells: [null, null, null, null, null, null, null, null, null],
      isGame: false,
    });
  };

  updatePlayer = (name, label) => {
    if (label === "player1") this.setState({ player1: name });
    else this.setState({ player2: name });
  };

  renderInput = () => {
    return (
      <div>
        <br></br>
        <InputComponent
          value="X"
          handleName={this.updatePlayer}
          label="player1"
        />
        <br />
        <br />
        <InputComponent
          value="O"
          handleName={this.updatePlayer}
          label="player2"
        />
        <br></br>
        <br />
        <button
          className="start"
          onClick={() => {
            this.setState({ isGame: true });
          }}
        >
          Start the Game
        </button>
      </div>
    );
  };
  renderContent = () => {
    let status;
    let win;
    if (
      this.state.cells.filter(cell => cell !== null).length ===
        this.state.cells.length &&
      !this.calculateWinner(this.state.cells)
    ) {
      status = "stale Mate";
      this.stopTimer1();
      this.stopTimer2();
    } else {
      win = this.calculateWinner(this.state.cells);
      if (win) {
        let winner =
          win.status === "X" ? this.state.player1 : this.state.player2;
        status = "Winner is : " + winner;
        this.stopTimer1();
        this.stopTimer2();
      } else {
        let move =
          this.state.next === "X" ? this.state.player1 : this.state.player2;
        status = "Next Move By : " + move;
      }
    }
    return (
      <div>
        <h4>{status}</h4>
        <button className="restart " onClick={this.restart}>
          Re-Play
        </button>
        <Board
          next={this.state.next}
          cells={this.state.cells}
          handle={this.handleCellClick}
          win={win}
        />
        <Counter id="timer1" />
        <Counter id="timer2" />
        <div>
          <MyTable data={this.state.tableData} />
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.state.isGame === false
          ? this.renderInput()
          : this.renderContent()}
      </div>
    );
  }
}

export default Game;
