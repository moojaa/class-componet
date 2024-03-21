import React, { Component } from 'react'

export default class score extends Component {
  render() {
    return (
      <div>
        <h1>score</h1>
        <div>
            <h5>{this.props.score}</h5>
        </div>
      </div>
    )
  }
}
