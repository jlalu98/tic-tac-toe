import React from "react";
class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "",
    };
  }
  handleChange = e => {
    this.setState({ player: e.target.value });
  };
  render() {
    return (
      <div className="form">
        <label>{this.props.label}</label>
        <input
          type="text"
          value={this.state.player}
          onChange={this.handleChange}
        ></input>
        <button
          className="play"
          onClick={() =>
            this.props.handleName(this.state.player, this.props.label)
          }
        >
          Submit
        </button>
      </div>
    );
  }
}
export default InputComponent;
