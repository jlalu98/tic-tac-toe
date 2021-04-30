import React, { Component } from 'react';

const CellBoard =(props)=>{

let value = '-'
const onCellClick=()=> {
console.log("Cell is clicked",props.id)
// if cell is clicked first it will be x and d
value= value==='o' ? 'x' : 'o';
console.log("value changed to" , value)

}
    return (
// all the attribute value pairs are stored into props 
// props is an object
       <button onClick={onCellClick}
       id="celldesign">{value}</button>
       )
    }
// export default CellBoard;

// ife we need a state to be changed we need class based component


// class CellBoard extends React.Component{

// constructor(props){
// super(props)
// this.state={
//     value:'-'
// }
// }
// onCellClick = ()=> {
//     console.log("Cell is clicked",this.props.id)
//     // if cell is clicked first it will be x and d
//     // this change will not be know to react so we should make use of this.set
//     //  this.state.value= this.state.value==='o' ? 'x' : 'o';

// // to change the state we use this.setState
//  let newvalue= this.state.value==='o' ? 'x' : 'o';
// // now state will work
//  this.setState({value:newvalue});
//     console.log("value changed to" ,this.state)
// }

//     render(){
//         return (
//             // all the attribute value pairs are stored into props 
//             // props is an object
                  
//                    <button onClick={this.onCellClick}
//                    id="celldesign">{this.state.value}</button>
//                    );

// }
// }

// export default CellBoard;


// -----------------------notes--------------------------------------------------------------
//function component is always called as stateless component
//class component is aalways called as stateful component