import React, { Component } from "react";
import "./DayPre.css"
class DayPre extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id={this.props.id} className="diaPrevio">
          <p ></p> 
      </div>
        
    );
  }
}

export default DayPre;
