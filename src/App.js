import React, { Component } from 'react'
import Deuda from './Deuda'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p className="intro" >El pueblo puertorriqueño debe</p>
        <Deuda />
          <a
            className="fuente-link"
            href="https://youtu.be/jiifirmvT4A?t=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fuentes y Cálculos
          </a>
        </header>
      </div>
    )
  }
}

export default App
