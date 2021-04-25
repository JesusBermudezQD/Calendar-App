import React, { Component } from "react";
import "./Home.css";

import Day from "../day/Day";
import DayPre from "../dayPre/DayPre";


import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      mesesName: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      diasName: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
      ],
      dias: [],
      diasP: [],
      diaActual: 0,
      // showModal: false,
    };
  }

  main = () => {
    const ultimoDiaf = new Date(
      this.state.date.getFullYear(),
      this.state.date.getMonth() + 1,
      0
    ).getDate();

    const primerDiaInicio = new Date(
      this.state.date.getFullYear(),
      this.state.date.getMonth()
    ).getDay();

    const diaprevio = new Date(
      this.state.date.getFullYear(),
      this.state.date.getMonth(),
      0
    ).getDate();

    const agregarDiasP = () => {
      let v = [];
      for (let i = primerDiaInicio; i > 0; i--) {
        v.push(diaprevio - i + 1);
      }
      return v;
    };

    const agregarDias = () => {
      let v = [];
      for (let i = 1; i <= ultimoDiaf; i++) {
        v.push(i);
      }
      return v;
    };

    this.setState({
      diaActual: (this.state.diaActual = this.state.date.getDate()),
    });
    this.setState({ dias: (this.state.dias = agregarDias()) });
    this.setState({ diasP: (this.state.diasP = agregarDiasP()) });
  };


  handlePrev = () => {
    this.state.date.setMonth(this.state.date.getMonth() - 1);
    this.main();
  };
  handleNext = () => {
    this.state.date.setMonth(this.state.date.getMonth() + 1);
    this.main();
    console.log(this.state.dias);
  };

 

  
  componentDidMount() {
    this.main();
  }

  componentWillUnmount() {
    this.main();
  }

 


  render() {
    const d = new Date(
      this.state.date.getFullYear(),
      this.state.date.getMonth()
    ).getDay();

    return (
      <>
        <div className="header">
          <AiOutlineDoubleLeft onClick={this.handlePrev} className="prev" />
          <h1>
            {this.state.mesesName[this.state.date.getMonth()]}{" "}
            {this.state.date.getFullYear()}
          </h1>

          <AiOutlineDoubleRight onClick={this.handleNext} className="next" />
        </div>

        <div className="calendar">
          <div className="calendar_header">
            {this.state.diasName.map((diaName) => (
              <p key={diaName}>{diaName}</p>
            ))}
          </div>
          <div className="calendar_body">
            {this.state.diasP.map((dia) => (
              <DayPre key={dia} dia={dia} className="diaPrevio" />
            ))}
            {this.state.dias.map((dia) => (
              <Day
                primerDiaInicio={new Date(
                  this.state.date.getFullYear(),
                  this.state.date.getMonth()
                ).getDay()}
                key={dia}
                id={
                  dia +
                  this.state.date.getMonth().toString() +
                  this.state.date.getFullYear().toString()
                }
                diaActual={this.state.diaActual}
                dia={dia}
                
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Calendar;
