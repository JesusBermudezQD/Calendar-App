import React, { Component } from "react";
import "./Modal.css";

import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: "",
      description: "",
      color: "",
      nota:[]
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setLocalNotas = () => {
    console.log(this.props.id);
    let obj = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      color: this.state.color,
    };

    this.state.nota.push(obj);
    let getNotas = localStorage.getItem("Notas");
    if (getNotas === null) {
      localStorage.setItem("Notas", JSON.stringify(this.state.nota));
    } else {
      let dataNota = JSON.parse(getNotas);
      dataNota.push(obj);
      localStorage.setItem("Notas", JSON.stringify(dataNota));
    }
    this.setState({nota:[],title:"",description:"",color:""})
  };



 

  render() {
    console.log(this.props);
    return (
      <div className="modal">
        <div className="backdrop"></div>
        <div className="modal_content">
          <div className="modal_content_header">
            <h2>Agregar Nota</h2>
            <AiOutlineClose
              className="exit_modal"
              onClick={this.props.showModal}
            />
          </div>
          <div className="modal_content_body">
            <div className="form_nota">
              <div className="form_nota_title">
                <input
                  name="title"
                  type="text"
                  required
                  onChange={this.handleChange}
                  value={this.state.title}
                />
                <label>Title</label>
              </div>

              <div className="form_nota_description">
                <input
                  name="description"
                  type="text"
                  required
                  onChange={this.handleChange}
                  value={this.state.description}
                />
                <label>Description</label>
              </div>
              <div className="form_nota_color">
                <label>Color</label>
                <input name="color" type="color" onChange={this.handleChange}   value={this.state.color}/>
              </div>

              <div className="form_nota_botton">
                <AiOutlineCheck
                  className="button"
                  onClick={this.setLocalNotas}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
