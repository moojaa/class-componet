import React, { Component } from 'react'
import './box.css'

export default class box extends Component {
    constructor(){
        super();
        this.result = "";
    }

    getResult = ()=>{
      if(this.props.result === "승리" )return this.result="win"
      else if(this.props.result === "비김" )return this.result="tie"
      else if(this.props.result === "패배" )return this.result="fail"
    }

  render() {
    this.getResult()
    return (
      <div className={`box ${this.result} rounded`}>
        <h1>{this.props.title}</h1>
        <div>
          <img src={this.props.item? this.props.item.img :'/img/question.png'} alt='box-img'/>
        </div>
        <h2>{this.props.result}</h2>
      </div>
    )
  }
}
