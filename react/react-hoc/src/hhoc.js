import React, { Component } from 'react'

export default (WrappedComponent, name) => {
  class NewComponent extends Component {
    constructor () {
      super()
      this.state = { data: null }
    }


    render () {
      return <WrappedComponent data={name} {...this.props} />
    }
  }
  return NewComponent
}