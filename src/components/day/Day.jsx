import React, { Component } from "react";
import "./Day.css";

import Modal from "../modal/Modal";

import { AiFillInfoCircle } from "react-icons/ai";


class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nota: [],
      showModal: false,
      notasDay:[]
    };
  }

  showModal=()=>{
    if(this.state.showModal){
      this.setState({showModal:false})
    }else{
      this.setState({showModal:true})
    } 
  }

  getLocalNotes=()=>{
    let Notas = JSON.parse(localStorage.getItem("Notas"));
    let v=[]
    // console.log(Notas);
    if(Notas){
      Notas.map((nota)=>{
        nota.id===this.props.id ? v.push(nota):null;
      })
    }
    
    this.setState({notasDay:v})
  }

    
  componentDidMount() {
    this.getLocalNotes()
  }

  componentWillUnmount() {
    this.getLocalNotes()
  }


  render() {
    
    return (
      <>
        <div
          id={this.props.id}
          className={
            this.props.dia === this.props.diaActual ? "color day" : "day"
          }
          onClick={this.showModal}
        >
          <div className="day__header">
            <p>{this.props.dia}</p>
          </div>
          <div className="day__body">
            {this.state.notasDay.map((nota,i)=> <span key={i} style={{color:nota.color}}><AiFillInfoCircle/> </span>)}
          </div>
        </div>

        {this.state.showModal ? <Modal showModal={this.showModal} id={this.props.id}/> : null}
      </>
    );
  }
}

export default Day;
