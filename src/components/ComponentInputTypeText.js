import React, { Component } from 'react'

export default class ComponentInputTypeText extends Component {
  render() {
    return (
      <textarea className='form-control' placeholder='Hola, escribe aquí tu texto' onChange={(ev) => this.props.callback(ev.target.value)} required></textarea>
    )
  }
}


