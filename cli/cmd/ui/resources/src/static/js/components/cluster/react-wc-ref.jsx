import React, { Component } from 'react'
import '@cds/core/button/register.js'

class ButtonWC extends Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: true }

    // This binding is necessary to make `this` work in the callback
    this.handleActivateLasers = this.handleActivateLasers.bind(this)
  }

  handleActivateLasers (e) {
    console.log('You clicked submit.')
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render () {
    return (
      <cds-button action='outline' size='sm' onClick={this.handleActivateLasers}>State debug button: {this.state.isToggleOn ? 'ON' : 'OFF'}</cds-button>
    )
  }
}

export default ButtonWC
