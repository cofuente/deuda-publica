import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format'

export default class Deuda extends Component {
    constructor(props){
        super(props)
        this.state = {
            totalInterest: 0,
            interestIncrements: 0,
            pageLoad: new Date(),
            interestRatePerMS: 0.155377980720446479124,  // this should be the anual interest rate (here I used 7) divided by 31536000000, the number of milliseconds in a year
            dateBaseline: 1487160000000, // mid january 2017 announcement
            debtBaseline: 7e+10, // 70,000,000,000
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillUnmount = this.componentWillUnmount.bind(this)
        this.tick = this.tick.bind(this)
    }

    componentDidMount(){
      const timeSinceBaseline = this.state.pageLoad-this.state.dateBaseline
      const totalInterestThusFar = this.state.interestRatePerMS * timeSinceBaseline
      const interestIncrements = this.state.interestRatePerMS * 100
      this.setState({totalInterest: totalInterestThusFar, interestIncrements: interestIncrements })
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
        totalInterest: state.totalInterest + state.interestIncrements,
      }))
    }

  render() {
      const deuda = Number(this.state.totalInterest) + this.state.debtBaseline
      return (
        <div className="deuda-container">
          <p className="text-pop-up-top">
            <CurrencyFormat className="deuda" value={deuda.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'}  />
          </p>
        </div>
    )
  }
}
