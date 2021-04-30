import React from "react";
class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: "",
    };
  }
handlenamechange=(e)=>{
this.setState({player:e.target.value})
}

  render() {
    return (
      <>
        <div>
          <b>{this.props.name}</b>
          <br></br>
          <input
            type="text"
            id={this.props.name}
            value={this.props.value}
            onChange={this.handlenamechange}
            required
          ></input>
          <br></br>
          <button
            onClick={() => {
            this.props.handlechange(this.state.player,this.props.label)
            }}
          >
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default FormComponent;
