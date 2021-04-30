import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from "./board";
import InputComponent from "./input-component";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          lastMove: null,
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      styleSquare: Array(9).fill("square"),
      playerName1:"X",
      playerName2:"O",
    };
  }

  handleClick(i) {
    var history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    var styleSquare = this.state.styleSquare.slice();
    const lastMove = [Math.floor(i/3),i%3];
    
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    const winner = calculateWinner(squares);
    
    this.setState({
      history: history = history.concat([
        {
          squares: squares,
          lastMove: lastMove,
        }
      ]),
      stepNumber: history.length - 1,
      xIsNext: !this.state.xIsNext, 
    });
    
    if(winner){
    this.onWin(winner, styleSquare);
    }
    
  }
  
  onWin(winner, styleSquare){
      styleSquare[winner[0]] = "win";
      styleSquare[winner[1]] = "win";
      styleSquare[winner[2]] = "win";
    
      this.setState({
      styleSquare: styleSquare,
    });
    }

  jumpTo(step) {
    var history = this.state.history.slice(0, step + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    var styleSquare = this.state.styleSquare.slice();
    const winner = calculateWinner(squares);
    
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
    
    if(winner){
      this.onWin(winner, styleSquare);
    } else {
      this.setState({
      styleSquare: Array(9).fill("square"),
    });
    }
    
  }
  
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    
          
    const moves = history.map((step, move) => {
     
      const desc = move ?
        'MOVE : ' + move + ' clicked at: (' + history[move].lastMove.toString() +')'  :
        'RESET';
      if(move === this.state.stepNumber){
        return (
        <li key={move}>
            <button onClick={() => this.jumpTo(move)}><b>{desc}</b></button>
        </li>
      );
      } else {
        return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
      }
      
    });

    let status;
    if (winner) {
      status = "Winner: " + (current.squares[winner[0]]==="X"?this.state.playerName1:this.state.playerName2);
    } else if (!current.squares.includes(null)) {
      status = "Its a draw!";
    } else {
      status = "Next player: " + (this.state.xIsNext ? this.state.playerName1 : this.state.playerName2);
    }

  
//   const handleNameChange1=(event)=>{
//       this.setState({
//           playerName1:event.target.value,
//       })
//   }
//   const handleNameChange2=(event)=>{
//       this.setState({
//         playerName2:event.target.value,
//     })
// }
  const handleSave1=(event)=>{
      this.setState({
        playerName1:event.target.value
      })
  }
  const handleSave2=(event)=>{
    this.setState({
      playerName1:event.target.value
    })
}
    return (
      <div className="game">
         {/* <div>
                <form >
                <label>Player 1:</label>
                <input type="text" 
                    placeholder={this.props.label}
                    value={this.state.value} 
                    onChange= {handleNameChange1}
                />
                <label>Player 2:</label>
                <input type="text" 
                    placeholder={this.props.label}
                    value={this.state.value} 
                    onChange= {handleNameChange2}
                />
                <input type="button" value="save" onClick={handleSave}/>
                </form>
            <br/>
            </div> */}
        

        <InputComponent label="Player 1 :" onChange={handleSave1}/>  
        <InputComponent label="Player 2 :" onChange={handleSave2}/>  
        
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            styleSquare={this.state.styleSquare}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  return null;
}



//149-><button onClick = {this.toggle}>{toggle}</button>




