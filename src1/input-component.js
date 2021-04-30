import React from 'react';

class component extends React.Component{
    constructor(props){
        super(props);
        this.state={
            playerName1:'X',
            playerName2:'O'
        }
    }
    // handleNameChange1=(event)=>{
    //     this.setState({
    //         playerName1:event.target.value,
    //     })
    // }
    // handleNameChange2=(event)=>{
    //     this.setState({
    //         playerName2:event.target.value,
    //     })
    // }
    handleClick=()=>{
        console.log(this.state.playerName1);
        console.log(this.state.playerName2);
    }
    // static getDeriveedStateFromProps(props,state){
    //     return null;
    // }
    render(){
        return(
            <div>
                <form >
                <label>{this.props.label}</label>
                <input type="text" 
                    placeholder="Player 1 Name"
                    value={this.state.value} 
                    onChange= {this.props.handleSave}
                />
                {/* <label>Player 2</label>
                <input type="text" 
                    placeholder="Player 2 Name"
                    value={this.state.value} 
                    onChange= {this.handleNameChange2}
                /> */}
                <input type="button" value="save" onClick={this.handlClick}/>
                </form>
            <br/>
            </div>
        );
    }
}
export default component;