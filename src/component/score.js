import React, { Component } from 'react'

export default class score extends Component {
  render() {
    return (
      <div className='d-flex flex-column my-1'>
        <h5 className='text-center'>{this.props.name}</h5>
        <div className='bg-white text-black py-1 rounded text-center'>
            {this.props.score}
        </div>
      </div>
    )
  }
}
