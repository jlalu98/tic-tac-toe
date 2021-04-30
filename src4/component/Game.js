// gameboard component

import React from "react";
import TicTacToeboard from "../component/board";
import MyTable from "./tablecomponent";
import FormComponent from "../component/formcomponent";
import Timer from "../component/timercomponent"
let iid;
class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: [],
      next: "X",
      cells: [null, null, null, null, null, null, null, null, null],
      player1: "",
      player2: "",
      flag: false,
      timer1:0,
      timer2:0,
      timerFlag:true,
      isActive:false,
      isPaused:false,
    };
  }



restart = () => {
 this.setState({
   tableData:[]
 })
  this.setState({
    next: "X",
    cells: [null, null, null, null, null, null, null, null, null],
  });
};

// handleStart = () => {
//   this.setState({
//     isActive:true,
//     isPaused:true
//   })

// }
// handlePause = () => {
//   clearInterval(this.iid)
//   this.setState({
//     isPaused:false
//   })
// }
// handleResume = () => {
//   this.setState({
//     isPaused:true,
//   })
//   this.iid= setInterval(() => {
//     this.setState({
//       timer: this.timer+1,
//     })
//   }, 1000)
// }

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
  startTimer(){
 
    iid=setInterval(() => {
      if(this.state.timerFlag){
        this.setState({
          timer1: this.state.timer1+1,
        })
      console.log("timer1:",this.state.timer1);
  
      }else{
        this.setState({
          timer2: this.state.timer2+1,
        })
      console.log("timer2:",this.state.timer2);
  
      }
    }, 1000)
    
  }
  handleCellClick = (id) => {
    if(this.state.winnerFlag===true){
      this.setState({
        timerFlag:null
      })
    }
    if(this.state.timerFlag===true){
      this.startTimer();
      this.setState({
        timerFlag:false
      });
      //player b timer start
    }
    else if(this.state.timerFlag===false){
      this.startTimer();
      //clearInterval(iid);
      this.setState({
        timerFlag:true
      });
      //player a

    }
    
    let currentValue = this.state.cells[id];
    if (this.calculateWinner(this.state.cells) || currentValue) return;
    let temptabledata = this.state.tableData;
    temptabledata.push({
      next: this.state.next,
      position: id,
      serialNum: this.state.cells.filter((cell) => cell != null).length + 1,
      player1: this.state.player1,
      player2: this.state.player2,
    });

    if (currentValue) return;

    let newCells = [...this.state.cells]; // take all the curent value
    newCells[id] = this.state.next; //change the value in current cell

    let newNext = this.state.next === "O" ? "X" : "O";

    //update the current state
    this.setState({ cells: newCells, next: newNext, tabledata: temptabledata });
  };
  handlechange = (name, label) => {
    //  this.state.player1 = e.target.value
    if (label === "player1") {
      this.setState({ player1: name });
    } else this.setState({ player2: name });
  };

  readInput = () => {
    return (
      <>
        <FormComponent
          label="player1"
          handlechange={this.handlechange}
          name="player1"
        ></FormComponent>
        <FormComponent
          label="player2"
          handlechange={this.handlechange}
          name="player2"
        ></FormComponent>
      </>
    );
  };

  displayContent = () => {
    let status;
    let win;
    if (
      this.state.cells.filter((cell) => cell !== null).length ===
        this.state.cells.length &&
      !this.calculateWinner(this.state.cells)
    ) {
     
      status = "stale Mate";
    } 
    else {
      
      win = this.calculateWinner(this.state.cells);
      if (win) {
        this.setState({
          winnerFlag:true
        })
        let temp = win.status === "X" ? this.state.player1 : this.state.player2;
        status = "Winner is : " + temp;
      } else {
        let temp1 =
          this.state.next === "X" ? this.state.player1 : this.state.player2;
        status = "Next Move By : " + temp1;
      }
    }
    return (
      <>
        <div>{status}</div>
        <TicTacToeboard
          cells={this.state.cells}
          win={win}
          handlefunc={this.handleCellClick}
        ></TicTacToeboard>
        <button onClick={this.restart}>Restart</button>
        {/* <Timer label="Player 1 Timer :" timer={this.state.timer} isActive={this.state.isActive} isPaused={this.state.isPaused}  handleStart={this.handleStart} handlePause={this.handlePause} handleResume={this.handleResume} /><Timer label="Player 2 Timer :" timer={this.state.timer} isActive={this.state.isActive} isPaused={this.state.isPaused}  handleStart={this.handleStart} handlePause={this.handlePause} handleResume={this.handleResume}/> */}
        <MyTable data={this.state.tableData} />
      </>
    );
  };

  render() {
    let styles;
    if (this.state.flag === true) styles = { display: "none" };
    return (
      <>
        <h1>PLAYER NAME ENTRIES</h1>
        <hr/>
        {this.state.flag === false ? this.readInput() : this.displayContent()}
        <button id="startBtn" style={styles} onClick={() => this.setState({ flag: true })}>
          {" "}
          Start{" "}
        </button>
      </>
    );
  }
}

export default Game;
