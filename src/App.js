import React from "react";
import "./styles.css";
import $ from "jquery";
//import { MDBSwitch } from 'mdb-react-ui-kit';

//console.log(MDBSwitch)
class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Heater Kit"
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  handleClick = (e) => {
    console.log(e.target.id);
    $(e.target).children()[0].play();
    this.setState({
      display: e.target.id
    });
  };
  handleKeyPress = (e) => {
    //console.log(this.textContent);
    switch (e.keyCode) {
      case 81:
        $("#Q")[0].play();
        this.setState({
          display: "Heater 1"
        });
        break;
      case 87:
        $("#W")[0].play();
        this.setState({
          display: "Heater 2"
        });
        break;
      case 69:
        $("#E")[0].play();
        this.setState({
          display: "Heater 3"
        });
        break;
      case 65:
        $("#A")[0].play();
        this.setState({
          display: "Heater 4"
        });
        break;
      case 83:
        $("#S")[0].play();
        this.setState({
          display: "Clap"
        });
        break;
      case 68:
        $("#D")[0].play();
        this.setState({
          display: "Open-hh"
        });
        break;
      case 90:
        $("#Z")[0].play();
        this.setState({
          display: "Kick-n-Hat"
        });
        break;
      case 88:
        $("#X")[0].play();
        this.setState({
          display: "Kick"
        });
        break;
      case 67:
        $("#C")[0].play();
        this.setState({
          display: "Closed-h"
        });
        break;
      default:
        return 0;
    }
  };
  render() {
    return (
      <div id="drum-machine">
        <div className="drum-pad-div">
          <div className="drum-pad" id="Heater 1" onClick={this.handleClick}>
            Q
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              className="clip"
              id="Q"
            ></audio>
          </div>
          <div className="drum-pad" id="Heater 2" onClick={this.handleClick}>
            W
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              className="clip"
              id="W"
            />
          </div>
          <div className="drum-pad" id="Heater 3" onClick={this.handleClick}>
            E
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              className="clip"
              id="E"
            />
          </div>
          <div className="drum-pad" id="Heater 4" onClick={this.handleClick}>
            A
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              className="clip"
              id="A"
            />
          </div>
          <div className="drum-pad" id="Clap" onClick={this.handleClick}>
            S
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              className="clip"
              id="S"
            />
          </div>
          <div className="drum-pad" id="Open HH" onClick={this.handleClick}>
            D
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              className="clip"
              id="D"
            />
          </div>
          <div className="drum-pad" id="Kick-n-Hat" onClick={this.handleClick}>
            Z
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              className="clip"
              id="Z"
            />
          </div>
          <div className="drum-pad" id="Kick" onClick={this.handleClick}>
            X
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              className="clip"
              id="X"
            />
          </div>
          <div className="drum-pad" id="Closed h" onClick={this.handleClick}>
            C
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              className="clip"
              id="C"
            />
          </div>
        </div>
        <div className="options-div">
          <div className="custom-control custom-switch"></div>
          <div id="display">{this.state.display}</div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
