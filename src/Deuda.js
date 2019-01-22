import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format'

export default class Deuda extends Component {
    constructor(props){
        super(props)
        this.state = {
            deuda: 70000000000
        }
    }
  render() {
      const deuda = this.state.deuda
    return (
      <div className="deuda-container">
        <CurrencyFormat className="deuda" value={deuda} displayType={'text'} thousandSeparator={true} prefix={'$'}  />
      </div>
    )
  }
}
