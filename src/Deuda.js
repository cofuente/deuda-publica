import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format'

export default class Deuda extends Component {
    constructor(props){
        super(props)
        this.state = {
            deuda: 70000000000,
            deudaInicial: 70000000000,
            initialLoadTime: new Date(),
            interestRatePerSecond: .00033333333
            //Anual interest rate /
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
        this.tick = this.tick.bind(this)
    }
    componentDidMount(){
      this.timerID = setInterval(
        () => this.tick(),
        100
      )
    }
    componentWillUnmount(){
      clearInterval(this.timerID)
    }
    tick(){
      this.setState((state, props) => ({
        deuda: state.deudaInicial + ((new Date()- state.initialLoadTime) * state.interestRatePerSecond),
      }))
    }

  render() {
      const deuda = this.state.deuda.toFixed(2)
      return (
        <div className="deuda-container">
          <p className="text-pop-up-top">
            <CurrencyFormat className="deuda" value={deuda} displayType={'text'} thousandSeparator={true} prefix={'$'}  />
          </p>
        </div>
    )
  }
}
