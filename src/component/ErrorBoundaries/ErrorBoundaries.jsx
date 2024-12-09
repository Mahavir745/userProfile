import React, { Component } from 'react'

export default class ErrorBoundaries extends Component {

  constructor(){
    super()
    this.state={
      hasError: false
    }
  }

  static getDerivedStateFromError(error){
    return {hasError: true}
  }

  render() {
    if(this.state.error){
      return (
        <div>
          {this.state.error ? <h1>Its has an error</h1>: this.state.children}
        </div>
      )
    }
  }
}
