import React from "react";
import CellBoard from "../component/cell";




// import values from "../component/Game";
// import MyTable from "../component/inputcomponent";


// class TicTacToeboard extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             next: "X",
//             cells: [null, null, null, null, null, null, null, null, null],
//             player1:'',
//             player2:''
//           };
//     }

//   handleCellClick=(id)=>{
//       console.log('cell clicked',id)
//       let currentValue = this.state.cells[id];
//       if (values.calculateWinner(this.state.cells) || currentValue) return;
//       tableData.push({
//           next: this.state.next,
//           position: id,
//           serialNum: this.state.cells.filter(cell => cell != null).length + 1,
//           player1:this.state.player1,
//           player2:this.state.player2
//         });

//       if (currentValue) return;

//       let newCells = [...this.state.cells]; // take all the curent value
//       newCells[id] = this.state.next;    //change the value in current cell

//       let newNext = this.state.next === "O" ? "X" : "O";

//       //update the current state
//       this.setState({ cells: newCells, next: newNext });
//   }

// restart = () => {
//   tableData = [];
//   this.setState({
//     next: "X",
//     cells: [null, null, null, null, null, null, null, null, null],
//   });
// };

//   render(){

//         return (

//             {/* {console.log(status)} */ }
//

// </div>

// render(){
//     return (
//         <div id="boarddesign">
//           <CellBoard id={0} value={this.state.cells[0]} onCellClick={this.handleCellClick}/>
//           <CellBoard id ={1}value={this.state.cells[1]}onCellClick={this.handleCellClick}/>
//           <CellBoard id={2}value={this.state.cells[2]}onCellClick={this.handleCellClick}/>
//           <CellBoard id={3}value={this.state.cells[3]}onCellClick={this.handleCellClick}/>
//           <CellBoard id={4}value={this.state.cells[4]}onCellClick={this.handleCellClick}/>
//           <CellBoard id={5} value={this.state.cells[5]}onCellClick={this.handleCellClick}/>
//           <CellBoard id={6}value={this.state.cells[6]}onCellClick={this.handleCellClick}/>
//           <CellBoard id={7}value={this.state.cells[7]}onCellClick={this.handleCellClick}/>
//           <CellBoard id={8}value={this.state.cells[8]}onCellClick={this.handleCellClick}/>

//         </div>
//         )
// }

// const TicTacToeboard =()=>{

// // }
//           )}}

const TicTacToeboard = (props) => {
  console.log(props)
  return (
    <div id="boarddesign">
      {props.cells.map((value, index) => (
        <CellBoard
          id={index}
          value={value}
          onWinner={props.win ? props.win.winnerArray : null}
          onCellClick={props.handlefunc}
        />
      ))}
    </div>
  );
};

export default TicTacToeboard;
